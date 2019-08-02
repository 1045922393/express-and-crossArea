$(function () {
  let form = document.querySelector('#myform');
  $('#sub').on('click', function () {
    if (!form.name.value.trim()) {
      alert('请输入姓名');
      return;
    } else {
      let data = decodeURIComponent($('#myform').serialize());
      //方法decodeURICompondent(URI字符串)  可以将URI转换为字符串格式
      // console.log(decodeURIComponent(data));
      $.ajax({
        type: 'post',
        data,
        url: 'http://127.0.0.1:8080/addHero',
        success: function (response) {
          alert(response.msg);
          location.href = "http://127.0.0.1:8080/index.html";
        }
      })
    }
  })
})