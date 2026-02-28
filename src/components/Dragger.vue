<template>
  <div
    class="dragger"
    ref="box"
    :style="dragStyle"
    @mousedown="startTouch"
    @touchstart="startTouch"
    @touchend="endTouch"
    @touchmove="moveTouch"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted } from "vue";

const props = defineProps({
  style: {
    type: Object,
    default: () => ({}),
  },
});

const box = ref(null);
const isDragging = ref(false);
const dragInfo = ref({ offsetX: 0, offsetY: 0, endX: 0, endY: 0 });
const dragStyle = ref({
  ...props.style,
  transform: "translate(0, 0)",
});
const resizeTimer = ref(null);
const touchStartTime = ref(0);
const distance = ref({
  t: 0,
  b: 0,
  l: 0,
  r: 0,
});
const startPos = ref({
  x: 0,
  y: 0,
});
const preventClick = (e) => {
  const preventClickHandler = (clickEvent) => {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    document.removeEventListener("click", preventClickHandler, true);
  };

  document.addEventListener("click", preventClickHandler, true);
};

const startTouch = (e) => {
  if (e.type === "mousedown") {
    e.preventDefault();
    e.stopPropagation();
    touchStartTime.value = Date.now();
    Object.assign(startPos.value, {
      x: e.pageX,
      y: e.pageY,
    });
  }
  Object.assign(dragInfo.value, {
    offsetX: (e.pageX || e.touches?.[0].pageX) - dragInfo.value.endX,
    offsetY: (e.pageY || e.touches?.[0].pageY) - dragInfo.value.endY,
  });

  isDragging.value = true;
};

const moveTouch = (e) => {
  if (isDragging.value) {
    const offsetX = e.touches[0].pageX - dragInfo.value.offsetX;
    const offsetY = e.touches[0].pageY - dragInfo.value.offsetY;
    setBoundary(offsetX, offsetY);
  }
};
const endTouch = (e) => {
  if (isDragging.value) {
    if (e.type === "mouseup") {
      const touchEndTime = Date.now();
      const moveDistance = Math.sqrt(
        Math.pow(e.pageX - startPos.value.x, 2) +
          Math.pow(e.pageY - startPos.value.y, 2),
      );

      if (moveDistance > 3 || touchEndTime - touchStartTime.value > 100) {
        e.preventDefault();
        e.stopPropagation();
        preventClick(e);
      }
    }
    isDragging.value = false;
  }
};

// 检测可以移动的范围，限制不超出视窗
const detectBoundary = () => {
  const style = box.value?.getBoundingClientRect();
  if (style) {
    const { left, right, bottom, top } = style;
    const leftDistance = left;
    const rightDistance = window.innerWidth - right;
    const topDistance = top;
    const bottomDistance = window.innerHeight - bottom;
    const distanceObj = {
      t: topDistance,
      b: bottomDistance,
      l: leftDistance,
      r: rightDistance,
    };
    Object.assign(distance.value, {
      ...distanceObj,
    });
  }
};
const setBoundary = (offsetX, offsetY) => {
  let newOffsetX = offsetX;
  let newOffsetY = offsetY;
  if (offsetX <= 0) {
    if (offsetX < -distance.value.l) {
      newOffsetX = -distance.value.l;
    } else {
      newOffsetX = offsetX;
    }
  } else {
    if (offsetX > distance.value.r) {
      newOffsetX = distance.value.r;
    } else {
      newOffsetX = offsetX;
    }
  }

  if (offsetY <= 0) {
    if (offsetY < -distance.value.t) {
      newOffsetY = -distance.value.t;
    } else {
      newOffsetY = offsetY;
    }
  } else {
    if (offsetY > distance.value.b) {
      newOffsetY = distance.value.b;
    } else {
      newOffsetY = offsetY;
    }
  }
  Object.assign(dragInfo.value, {
    endX: newOffsetX,
    endY: newOffsetY,
  });
  Object.assign(dragStyle.value, {
    transform: `translate(${newOffsetX}px, ${newOffsetY}px)`,
  });
};
const handleMouseMove = (e) => {
  if (isDragging.value) {
    e.preventDefault();
    const offsetX = e.pageX - dragInfo.value.offsetX;
    const offsetY = e.pageY - dragInfo.value.offsetY;
    requestAnimationFrame(() => {
      setBoundary(offsetX, offsetY);
    });
  }
};
const handleResize = () => {
  if (resizeTimer.value) {
    clearTimeout(resizeTimer.value);
  }
  resizeTimer.value = setTimeout(() => {
    detectBoundary();
    setBoundary(dragInfo.value.endX, dragInfo.value.endY);
  }, 200);
};

onMounted(() => {
  detectBoundary();
  window.addEventListener("resize", handleResize);
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", endTouch);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", endTouch);
  window.removeEventListener("resize", handleResize);
});
</script>
<style lang="less" scoped>
.dragger {
  position: fixed;
  z-index: 100;
  user-select: none;
  touch-action: none;
  cursor: pointer;
  will-change: transform;
  transform: translateZ(0);
}
</style>
