<template>
  <div class="auth">
    <div class="fields">
      <slot name="fields"></slot>
    </div>
    <div class="submit">
      <slot name="submit"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fields,
.submit {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fields {
  margin: 0 auto;
  max-width: 300px;
  width: 100%;
  gap: 1em;

  & > * {
    width: 100%;
  }
}

.submit {
  margin-top: 1em;
}
</style>
