<template>
  <div class="pd-10px">
    <h1>Flex Direction</h1>
    <div>ใช้สำหรับกำหนดทิศทางการจัดวางของ Flex Items</div>

    <h3>Property</h3>
    <table-atomic :data="property"></table-atomic>

    <h3>Value</h3>
    <table-atomic :data="value"></table-atomic>

    <h3>Responsive <span class="cl-success">YES</span></h3>
    <responsive/>

    <h3>Hover <span class="cl-danger">NO</span></h3>
  </div>
</template>

<script>
import TableAtomic from '@/components/TableAtomic'
import Responsive from '@/components/Responsive'

export default {
  components: {
    TableAtomic,
    Responsive
  },
  data () {
    return {
      property: [
        ['Class', 'f-drt-[value]-[responsive]'],
        ['Property', 'flex-direction']
      ],
      value: [
        ['Class', 'row', 'column'],
        ['Value Description', 'สำหรับ "row"', 'สำหรับ "column"']
      ]
    }
  }
}
</script>

