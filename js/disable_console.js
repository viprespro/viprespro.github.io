// 禁用打开控制台查看源码
document.onkeydown = function (e) {
  if (
    123 == e.keyCode ||
    (e.ctrlKey &&
      e.shiftKey &&
      (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) ||
    (e.ctrlKey && 85 === e.keyCode)
  )
    // return (
    //   btf.snackbarShow('你真坏，不能打开控制台喔!'),
    //   (event.keyCode = 0),
    //   (event.returnValue = !1),
    //   !1
    // )
    return false
  if ((e.ctrlKey || e.metaKey) && 67 == e.keyCode && '' != selectTextNow)
    return btf.snackbarShow('复制成功'), rightmenuCopyText(selectTextNow), !1
}

// 禁用右键菜单
window.oncontextmenu = function (event) {
  return false
}
