
window.onload = function () {

    // davidwalsh.name/query-string-javascript

    var k = '77';
    var urlParams = new URLSearchParams(window.location.search);
    var input_k = urlParams.get('k');
    var k_match = (input_k == k);

    var urlParamsForFollowingPage = '';
    if (k_match) urlParamsForFollowingPage = ('?k=' + k);
    //alert(urlParamsForFollowingPage);


    // stackoverflow.com/questions/17001961/how-to-add-drop-down-list-select-programmatically

    var menuDiv = document.getElementById("menuDiv");

    //Create array of options to be added
    var array = [
        ["public", "最新張貼", "index.html"]
        , ["private", "主題 - 週期與定值定額", "value_averaging.html"]
        , ["private", "主題 - 減法生活", "less_is_more.html"]
        , ["private", "主題 - 閱讀", "reading.html"]
        , ["private", "書籤 - 居住", "house.html"]
        , ["public", "封存 - 2016", "archive2016.html"]
        , ["public", "封存 - 2015", "archive2015.html"]
        , ["public", "封存 - 2014", "archive2014.html"]
        , ["public", "封存 - 2013", "archive2013.html"]
        , ["public", "封存 - 2012", "archive2012.html"]
    ]


    //Create and append select list
    var selectList = document.createElement("select");
    selectList.setAttribute("onChange", "window.location.href=this.value")
    selectList.id = "mySelect";
    menuDiv.appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == "public") {
            var option = document.createElement("option");
            option.text = array[i][1];
            option.value = (array[i][2] + urlParamsForFollowingPage);
            selectList.appendChild(option);
        }
        else {

            if (k_match) {

                var option = document.createElement("option");
                option.text = array[i][1];
                option.value = (array[i][2] + urlParamsForFollowingPage);
                selectList.appendChild(option);
            }
        }
    }

    //Select item by value
    var pn = window.location.pathname;
    var s = pn.lastIndexOf("/");
    var current_page_name = "index.html";
    if (s != -1) current_page_name = pn.substring(s + 1);

    for (var i = 0; i < selectList.options.length; i++) {
        var option_value = selectList.options[i].value;
        if (selectList.options[i].value == (current_page_name + urlParamsForFollowingPage)) {
            selectList.selectedIndex = i;
            break;
        }
    }
};

