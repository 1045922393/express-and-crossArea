$(function () {
    let id = getLocationSearch();
    // console.log(id)

    $.ajax({
        type: 'get',
        data: id,
        url: 'http://127.0.0.1:8080/getCurrent',
        success: function (response) {
            // console.log(response)
            if (response.code == 502) {
                alert(response.msg);
                location.href = "http://127.0.0.1:8080/index.html"
                return;
            }
            $('#name').val(response.name);
            $("#headSrc").val(response.img);
            let genSel = response.gender == "男" ? "#nan" : '#nv';
            $(genSel).prop("checked", true);
            $('#id').val(response.id);
        }
    });
    $('#sub').on('click', function () {
        if (!$('#name').val()) {
            alert('姓名不能为空');
            return;
        }
        let getData = $('#form').serialize();
        console.log(getData)
        $.ajax({
            type: 'post',
            data: getData,
            url: 'http://127.0.0.1:8080/editHero',
            success: (response) => {
                // console.log(response);
                if (response.code == 200) {
                    alert(response.msg);
                    location.href = "http://127.0.0.1:8080/index.html"
                }
            }
        })
    })
})