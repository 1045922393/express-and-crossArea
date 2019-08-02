$(function () {
  $("#tbody").on('click', "td:last-child a:last-child", function (e) {
    // console.log(111)
    if (confirm('确定删除吗?')) {
      let delId = $(this).attr('data-id');
      delTarget = this;
      $.ajax({
        type: 'get',
        data: { delId },
        url: "http://127.0.0.1:8080/delHero",
        success: function (response) {
          console.log(response);
          if (response.code == 200) {
            alert(response.msg);
            $(delTarget).parents('tr').remove();
          }
        }
      })
    }
  })
})