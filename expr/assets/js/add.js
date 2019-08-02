$(function () {
  function getParams(data) {
    let target = {};
    data.split("&").forEach(e => {
      target[e.split('=')[0]] = e.split("=")[1];
    })
    return target;

  }
  // 点击新增，把数据新增到服务器
  $('#sub').on('click', function () {
    // 非空判断

    // 收集数据
    // let data = decodeURIComponent($('#myform').serialize());
    // data = getParams(data);
    let data = decodeURIComponent($('#myform').serialize());
    console.log(data);
    // ajax请求
    $.ajax({
      type: "post",
      url: "http://127.0.0.1:8080/addHero",
      data,
      // dataType 用于告诉ajax对象，服务器返回的格式是什么，不需要根据Content-Type自己解析了
      // dataType: 'json',
      success: function (res) {
        // console.log(res);
        // res = JSON.parse(res);
        if (res.code === 200) {
          alert(res.msg);
          location.href = "http://127.0.0.1:8080/index.html"
        }
      }

    });
  })
});