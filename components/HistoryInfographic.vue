<template>
  <div class="w-full px-4">
    <ol class="flex historia-grafico">
      <li class="w-56 h-36 md:h-auto md:w-1/5">
        <h3>2008</h3>
        <p>Nam eget purus sed erat sagittis ultrices quis eu</p>
      </li>
      <li class="w-56 h-56 md:h-auto md:flex-grow">
        <h3>2010</h3>
        <p>Nam eget purus sed erat sagittis ultrices quis eu</p>
      </li>
      <li class="w-56 h-40 md:h-auto md:w-1/4 md:self-end">
        <h3>2015</h3>
        <p>Nam eget purus sed erat sagittis ultrices quis eu</p>
      </li>
    </ol>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.historia-grafico {
  @apply border-green relative flex my-4;
  &::after {
    @apply block absolute border-green border-r-4 border-b-4 p-2;
    content: '';
  }
  & > li {
    @apply border-green;
    & h3 {
      @apply text-green font-semibold;
    }
    & p {
      @apply text-sm w-32;
    }
    &::before {
      @apply inline-block bg-white rounded-full border-green border-4 p-2;
      content: '';
    }
  }
}

@media (max-width: 767px) {
  .historia-grafico {
    @apply flex-col border-l-4 ml-4 pt-10;
    &::after {
      @apply -ml-3 bottom-0;
      transform: rotate(45deg);
    }
    & > li {
      @apply pl-4 mb-4;
      & h3::before {
        @apply absolute block w-32 border-t-4 border-green -ml-2;
        margin-top: -1.3em;
        content: '';
      }
      & p {
        @apply pr-4;
      }
      &::before {
        margin-left: -1.85em;
        content: '';
      }
    }
  }
}

@media (min-width: 768px) {
  .historia-grafico {
    @apply border-t-4;
    &::after {
      @apply -mt-3 right-0;
      transform: rotate(-45deg);
    }
    & > li {
      @apply ml-10 border-l-4 pl-4;
      margin-top: -0.9em;
      & p {
        @apply pr-4;
      }
      &::before {
        margin-left: -1.85em;
        content: '';
      }
    }
  }
}
</style>
