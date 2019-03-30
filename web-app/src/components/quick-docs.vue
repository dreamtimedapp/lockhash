<template>
  <div class="box text-gray-50">
    <div class="box-heading d-flex align-items-center justify-content-between">
      <div class="text-13">快速文档入口</div>
    </div>
    <ul>
      <li class="py-1">
        <docs-icon class="mr-1"/>
        <a
          class="text-gray-50"
          href="https://mp.weixin.qq.com/debug/wxadoc/dev/index.html"
          target="_blank"
        ></a>
      </li>
      <li class="py-1">
        <docs-icon class="mr-1"/>
        <a class="text-gray-50" href="https://mp.weixin.qq.com/wiki" target="_blank"></a>
      </li>
      <li class="py-1">
        <docs-icon class="mr-1"/>
        <a
          class="text-gray-50"
          href="https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&lang=zh_CN"
          target="_blank"
        ></a>
      </li>
      <li class="py-1">
        <docs-icon class="mr-1"/>
        <a class="text-gray-50" href="https://work.weixin.qq.com/api/doc" target="_blank"></a>
      </li>
      <li class="py-1">
        <docs-icon class="mr-1"/>
        <a
          class="text-gray-50"
          href="https://www.easywechat.com/docs"
          target="_blank"
        ></a>
      </li>
      <li class="py-1">
        <docs-icon class="mr-1"/>
        <a
          class="text-gray-50"
          href="https://www.easywechat.com/docs/3.x"
          target="_blank"
        ></a>
      </li>
    </ul>
  </div>
</template>

<script>
import DocsIcon from '$icons/FileDocumentBoxOutline'

export default {
  name: 'quick-docs',
  components: { DocsIcon }
}
</script>

<style scoped>
</style>
