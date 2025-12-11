<template>
  <div class="z-button-group" :class="buttonGroupClass">
    <el-button
      v-for="(button, index) in buttons"
      :key="index"
      :type="button.type || 'default'"
      :size="size"
      :icon="button.icon"
      :disabled="button.disabled"
      :loading="button.loading"
      @click="handleClick(button.action || index)"
    >
      {{ button.text }}
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'ZButtonGroup',
  props: {
    buttons: {
      type: Array,
      default: () => []
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: value => ['horizontal', 'vertical'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: value => ['medium', 'small', 'mini'].includes(value)
    }
  },
  computed: {
    buttonGroupClass() {
      return {
        'z-button-group--vertical': this.direction === 'vertical'
      }
    }
  },
  methods: {
    handleClick(action) {
      this.$emit('click', action)
    }
  }
}
</script>

<style scoped>
.z-button-group {
  display: inline-flex;
}

.z-button-group .el-button {
  border-radius: 0;
}

.z-button-group .el-button:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.z-button-group .el-button:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.z-button-group .el-button:not(:first-child) {
  margin-left: -1px;
}

.z-button-group--vertical {
  flex-direction: column;
}

.z-button-group--vertical .el-button:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
}

.z-button-group--vertical .el-button:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}

.z-button-group--vertical .el-button:not(:first-child) {
  margin-left: 0;
  margin-top: -1px;
}
</style>
