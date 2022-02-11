function starttime() {
    var dt = new Date();
    $(".hh").text(dt.getHours());
    $(".mm").text(dt.getMinutes());
    $(".ss").text(dt.getSeconds());
    $(".yyyy").text(dt.getFullYear());
    $(".mr").text(dt.getMonth() + 1);
    $(".dd").text(dt.getDate());
    setTimeout(() => {
        starttime();
    }, 1000);
}

window.onload = function() {
    starttime();
    var zho = "1e368";
    $("[did='Load']").hide();
    $(".app").hide();
    $("[did='wel1']").show(400);
    var app2flag;
    var grsflag;
    var app3flag;
    var app4flag;
    var sesflag;
    var bzsflag;
    if (localStorage.saves == undefined || localStorage.saves == "1") {
        localStorage.saves = "1";
        localStorage.username = "";
        localStorage.password = "";
        localStorage.zp = "窄屏";
        localStorage.tx = "txfile/admin.png";
        localStorage.gxqm = "我是一个人";
        localStorage.bz = "back.jpeg";
        localStorage.my = "海内存知己，天涯若比邻。";
        localStorage.appa = "欢迎使用记事本";
        localStorage.bbh = "0.74";
        $("[did='wel1']").show(400);
        $(".activity[did='wel1'] .page[pid='wel1_1'] .smalla-more").fadeIn(1600);
        $(".activity[did='wel1'] .title").fadeIn(1000);
        $(".activity[did='wel1'] .greystr").fadeIn(1000);
    } else {
        $("[did='wel1']").hide();
        $("[did='wel2']").hide();
        $("[did='wel3']").hide();
        if (localStorage.zp == "窄屏") {
            $(".in").css("width", "400px");
            $(".activity").css("width", "370px");
            $("[did='sp']").show(400);
            $("[did='hsp']").hide(400);
            $("[did='sp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hsp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='psp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hpsp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='bin']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hbin']").css("background-image", "url(" + localStorage.bz + ")");
        } else if (localStorage.zp == "宽屏") {
            $(".in").css("width", "770px");
            $(".activity").css("width", "730px");
            $("[did='sp']").hide();
            $("[did='hsp']").show(400);
            $("[did='sp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hsp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='psp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hpsp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='bin']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hbin']").css("background-image", "url(" + localStorage.bz + ")");
        }
    }
    if (localStorage.bbh == undefined) {
        localStorage.my = "海内存知己，天涯若比邻。";
        localStorage.appa = "欢迎使用记事本";
        localStorage.bbh = "0.74";
        layer.msg("更新成功，版本号：" + localStorage.bbh);
    } else if (localStorage.bbh == "0.73") {
        localStorage.appa = "欢迎使用记事本";
        localStorage.bbh = "0.74";
        layer.msg("更新成功，版本号：" + localStorage.bbh);
    }
    localStorage.bbh = "1.00";
    if (localStorage.zp == "宽屏") {
        $(".ggpm p:last").css("background", "yellow");
        $(".ggpm p:first").css("background", "red");
    } else {
        $(".ggpm p:first").css("background", "yellow");
        $(".ggpm p:last").css("background", "red");
    }
    $(".myss").text(localStorage.my);
    $(".appatext").text(localStorage.appa);
    $(".saveappatext").click(function() {
        localStorage.appa = $(".appatext").val();
        layer.msg("保存成功");
    });
    $("[did='wel1'] .next").click(function() {
        $("[did='wel1']").hide(400);
        $("[did='wel2']").show(400);
    });
    $("[did='wel2'] .next").click(function() {
        var user = $("#usern").val();
        var pass = $("#passn").val();
        var star = $("#starn").val();
        if (user != "" && pass != "" && star == zho) {
            if ($("#setpin").val() == "窄屏" || $("#setpin").val() == "宽屏") {
                localStorage.saves = "2";
                localStorage.username = user;
                localStorage.password = pass;
                localStorage.zp = $("#setpin").val();
                $("[did='wel2']").hide(400);
                $("[did='wel3']").show(400);
            } else {
                layer.msg("验证失败");
            }
        } else {
            layer.msg("验证失败");
        }
    });
    $("[did='wel2'] .last").click(function() {
        $("[did='wel2']").hide(400);
        $("[did='wel1']").show(400);
    });
    $("[did='wel3'] .next").click(function() {
        $("[did='wel1']").hide();
        $("[did='wel2']").hide();
        $("[did='wel3']").hide(400);
        if (localStorage.zp == "窄屏") {
            $(".in").css("width", "400px");
            $(".activity").css("width", "370px");
            $("[did='sp']").show(400);
            $("[did='hsp']").hide(400);
            $("[did='bzs']").hide();
            $("[did='ses']").hide();
            $("[did='grs']").hide();
            $("[did='ads']").hide();
            $("[did='yys']").hide();
            $("[did='hyys']").hide();
            $("[did='hses']").hide();
            $("[did='hbzs']").hide();
            $("[did='hgrs']").hide();
            $("[did='hads']").hide();
            $("[did='sp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hsp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='psp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hpsp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='bin']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hbin']").css("background-image", "url(" + localStorage.bz + ")");
        } else if (localStorage.zp == "宽屏") {
            $(".in").css("width", "770px");
            $(".activity").css("width", "730px");
            $("[did='sp']").hide(400);
            $("[did='hsp']").show(400);
            $("[did='bzs']").hide();
            $("[did='ses']").hide();
            $("[did='grs']").hide();
            $("[did='ads']").hide();
            $("[did='yys']").hide();
            $("[did='hyys']").hide();
            $("[did='hses']").hide();
            $("[did='hbzs']").hide();
            $("[did='hgrs']").hide();
            $("[did='hads']").hide();
            $("[did='sp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hsp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='psp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hpsp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='bin']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hbin']").css("background-image", "url(" + localStorage.bz + ")");
        }
    });
    $("[did='wel3'] .last").click(function() {
        $("[did='wel3']").hide(400);
        $("[did='wel2']").show(400);
    });
    $("[did='sp'] .gops").click(function() {
        $("[did='sp']").hide(400);
        $("[did='hsp']").hide();
        $("[did='psp']").show(400);
        $("#jsuser").text(localStorage.username);
    });
    $("[did='hsp'] .gops").click(function() {
        $("[did='sp']").hide();
        $("[did='hsp']").hide(400);
        $("[did='psp']").hide();
        $("[did='hpsp']").show(400);
        $("#hjsuser").text(localStorage.username);
    });
    $("[did='psp'] .db>span").click(function() {
        $("[did='sp']").show(400);
        $("[did='psp']").hide(400);
    });
    $("[did='psp'] #jsgo").click(function() {
        if ($("#jspass").val() == localStorage.password) {
            $("[did='psp']").hide(400);
            $("[did='hpsp']").hide();
            $("[did='bin']").show(400);
            document.getElementById("jspass").value = "";
        } else {
            layer.msg("密码错误");
        }
    });
    $("[did='psp'] .gj>button").click(function() {
        layer.open({
            title: "忘记密码向导",
            content: "&nbsp;&nbsp;&nbsp;&nbsp;你忘记了密码，必须通过清除数据的方式\n登录，确定清除数据？",
            btn: ["取消", "确定"],
            yes: function(index, layero) {
                layer.msg("你仔细想想，或许就想起来了。");
            },
            btn2: function(index, layero) {
                localStorage.saves = "1";
                layer.msg("已清除，请手动刷新。");
                setTimeout(function() {
                    window.location.href = "#";
                }, 1500);
            }
        });
    });
    $("[did='hpsp'] .db>span").click(function() {
        $("[did='hsp']").show(400);
        $("[did='hpsp']").hide(400);
    });
    $("[did='hpsp'] #hjsgo").click(function() {
        if ($("#hjspass").val() == localStorage.password) {
            $("[did='psp']").hide();
            $("[did='hpsp']").hide(400);
            $("[did='bin']").hide();
            $("[did='hbin']").show(400);
            document.getElementById("hjspass").value = "";
        } else {
            layer.msg("密码错误");
        }
    });
    $("[did='hpsp'] .gj>button").click(function() {
        layer.open({
            title: "忘记密码向导",
            content: "&nbsp;&nbsp;&nbsp;&nbsp;你忘记了密码，必须通过清除数据的方式\n登录，确定清除数据？",
            btn: ["取消", "确定"],
            yes: function(index, layero) {
                layer.msg("你仔细想想，或许就想起来了。");
            },
            btn2: function(index, layero) {
                localStorage.saves = "1";
                layer.msg("已清除，请手动刷新。");
                setTimeout(function() {
                    window.location.href = "#";
                }, 1500);
            }
        });
    });



    function hqsj() {
        var datajson = '{"saves":"' + localStorage.saves +
            '",\n"username":"' + localStorage.username +
            '",\n"password":"' + localStorage.password +
            '",\n"zp":"' + localStorage.zp +
            '",\n"tx":"' + localStorage.tx +
            '",\n"gxqm":"' + localStorage.gxqm +
            '",\n"bz":"' + localStorage.bz +
            '",\n"my":"' + localStorage.my +
            '",\n"appa":"' + localStorage.appa +
            '",\n"bbh":"' + localStorage.bbh + '"}';
        return datajson;

    }
    $("[did='bin'] .cd span").click(function() {
        $("[did='sp']").show(400);
        $("[did='bin']").hide(400);
    });
    $("[did='hbin'] .cd span").click(function() {
        $("[did='hsp']").show(400);
        $("[did='hbin']").hide(400);
    });
    $("[did='bin'] .toyy").click(function() {
        $("[did='bin']").hide(400);
        $("[did='hbin']").hide();
        $("[did='bzs']").hide();
        $("[did='ses']").hide();
        $("[did='grs']").hide();
        $("[did='ads']").hide();
        $("[did='hyys']").hide();
        $("[did='hses']").hide();
        $("[did='hbzs']").hide();
        $("[did='hgrs']").hide();
        $("[did='hads']").hide();
        $("[did='yys']").show(400);
    });
    $("[did='bin'] .tose").click(function() {
        $("[did='bin']").hide(400);
        $("[did='hbin']").hide();
        $("[did='bzs']").hide();
        $("[did='yys']").hide();
        $("[did='grs']").hide();
        $("[did='ads']").hide();
        $("[did='hyys']").hide();
        $("[did='hbzs']").hide();
        $("[did='hgrs']").hide();
        $("[did='hads']").hide();
        $("[did='ses']").show(400);
        sesflag = 1;
    });
    $("[did='bin'] .tobz").click(function() {
        $("[did='bin']").hide(400);
        $("[did='hbin']").hide();
        $("[did='yys']").hide();
        $("[did='ses']").hide();
        $("[did='grs']").hide();
        $("[did='ads']").hide();
        $("[did='hyys']").hide();
        $("[did='hses']").hide();
        $("[did='hgrs']").hide();
        $("[did='hads']").hide();
        $("[did='bzs']").show(400);
        bzsflag = 1;
    });
    $("[did='bin'] .togr").click(function() {
        $("[did='bin']").hide(400);
        $("[did='hbin']").hide();
        $("[did='bzs']").hide();
        $("[did='ses']").hide();
        $("[did='yys']").hide();
        $("[did='ads']").hide();
        $("[did='hyys']").hide();
        $("[did='hses']").hide();
        $("[did='hbzs']").hide();
        $("[did='hads']").hide();
        $("[did='grs']").show(400);
        $(".grsusername").text(localStorage.username);
        $(".grsgxqm").text(localStorage.gxqm);
        $(".grstx").attr("src", localStorage.tx);
        grsflag = 1;
    });
    $("[did='grs'] .page").hide();
    $("[did='grs'] [pid='main']").show();
    $("[did='grs'] .ggtx").click(function() {
        $("[did='grs'] [pid='main']").hide(400);
        $("[did='grs'] [pid='ggtxpage']").show(400);
    });
    $("[did='grs'] .toggtxmr").click(function() {
        $("[did='grs'] [pid='ggtxpage']").hide(400);
        $("[did='grs'] [pid='ggtxmr']").show(400);
    });
    $("[did='grs'] .toggtxbd").click(function() {
        $("[did='grs'] [pid='ggtxpage']").hide(400);
        $("[did='grs'] [pid='ggtxbd']").show(400);
    });
    $("[did='grs'] .toggtxwl").click(function() {
        $("[did='grs'] [pid='ggtxpage']").hide(400);
        $("[did='grs'] [pid='ggtxwl']").show(400);
    });
    $("[did='grs'] .ggtxcancl").click(function() {
        $("[did='grs'] [pid='main']").show(400);
        $("[did='grs'] [pid='ggtxpage']").hide(400);
    });
    var mrtxcheck1 = 0;
    var mrtxcheck2 = 0;
    var mrtxcheck3 = 0;
    var mrtxcheck4 = 0;
    $(".mrtx1").click(function() {
        mrtxcheck1 = 1;
        mrtxcheck2 = 0;
        mrtxcheck3 = 0;
        mrtxcheck4 = 0;
        $(".mrtx1").css("border", "cyan solid 1px");
        $(".mrtx2").css("border", "0");
        $(".mrtx3").css("border", "0");
        $(".mrtx4").css("border", "0");
    });
    $(".mrtx2").click(function() {
        mrtxcheck1 = 0;
        mrtxcheck2 = 1;
        mrtxcheck3 = 0;
        mrtxcheck4 = 0;
        $(".mrtx2").css("border", "cyan solid 1px");
        $(".mrtx1").css("border", "0");
        $(".mrtx3").css("border", "0");
        $(".mrtx4").css("border", "0");
    });
    $(".mrtx3").click(function() {
        mrtxcheck1 = 0;
        mrtxcheck2 = 0;
        mrtxcheck3 = 1;
        mrtxcheck4 = 0;
        $(".mrtx3").css("border", "cyan solid 1px");
        $(".mrtx2").css("border", "0");
        $(".mrtx1").css("border", "0");
        $(".mrtx4").css("border", "0");
    });
    $(".mrtx4").click(function() {
        mrtxcheck1 = 0;
        mrtxcheck2 = 0;
        mrtxcheck3 = 0;
        mrtxcheck4 = 1;
        $(".mrtx4").css("border", "cyan solid 1px");
        $(".mrtx2").css("border", "0");
        $(".mrtx3").css("border", "0");
        $(".mrtx1").css("border", "0");
    });
    $(".ggtxmryes").click(function() {
        var str = "";
        if (mrtxcheck1 == 1) {
            str = "txfile/icon.jpg";
        } else if (mrtxcheck2 == 1) {
            str = "txfile/admin.png";
        } else if (mrtxcheck3 == 1) {
            str = "txfile/vscode.jpg";
        } else if (mrtxcheck4 == 1) {
            str = "txfile/xbisland.jpeg";
        }
        localStorage.tx = str;
        $(".grstx").attr("src", localStorage.tx);
        $("[did='grs'] [pid='main']").show(400);
        $("[did='grs'] [pid='ggtxpage']").hide();
        $("[did='grs'] [pid='ggtxmr']").hide();
        $("[did='grs'] [pid='ggtxbd']").hide();
        $("[did='grs'] [pid='ggtxwl']").hide();
        $(".grstxname").text(localStorage.tx);
        layer.msg("更改成功");
    });
    $(".grstxname").text(localStorage.tx);
    $(".ggtxmrno").click(function() {
        $("[did='grs'] [pid='ggtxpage']").show(400);
        $("[did='grs'] [pid='ggtxmr']").hide(400);
        $("[did='grs'] [pid='ggtxbd']").hide();
        $("[did='grs'] [pid='ggtxwl']").hide();
    });
    $(".ggtxbdfile").change(function(file) {
        var url = window.URL.createObjectURL(file.target.files[0]);
        $(".ggtxbdyl").attr("src", url);
        $(".ggtxbdyl").css("visibility", "visible");
    });
    $(".ggtxbdyes").click(function() {
        localStorage.tx = $(".ggtxbdyl").attr("src");
        $(".grstx").attr("src", localStorage.tx);
        $("[did='grs'] [pid='main']").show(400);
        $("[did='grs'] [pid='ggtxpage']").hide();
        $("[did='grs'] [pid='ggtxmr']").hide();
        $("[did='grs'] [pid='ggtxbd']").hide();
        $("[did='grs'] [pid='ggtxwl']").hide();
        $(".grstxname").text(localStorage.tx);
        layer.msg("更改成功");
    });
    $(".ggtxbdno").click(function() {
        $("[did='grs'] [pid='ggtxpage']").show(400);
        $("[did='grs'] [pid='ggtxmr']").hide();
        $("[did='grs'] [pid='ggtxbd']").hide(400);
        $("[did='grs'] [pid='ggtxwl']").hide();
    });
    $(".ggtxwlno").click(function() {
        $("[did='grs'] [pid='ggtxpage']").show(400);
        $("[did='grs'] [pid='ggtxmr']").hide();
        $("[did='grs'] [pid='ggtxbd']").hide();
        $("[did='grs'] [pid='ggtxwl']").hide(400);
    });
    $(".ggtxwlyes").click(function() {
        localStorage.tx = $(".ggtxwlurl").val();
        $(".grstx").attr("src", localStorage.tx);
        $("[did='grs'] [pid='main']").show(400);
        $("[did='grs'] [pid='ggtxpage']").hide();
        $("[did='grs'] [pid='ggtxmr']").hide();
        $("[did='grs'] [pid='ggtxbd']").hide();
        $("[did='grs'] [pid='ggtxwl']").hide();
        $(".grstxname").text(localStorage.tx);
        layer.msg("更改成功");
    });
    $(".ggyhm").click(function() {
        $("[did='grs'] [pid='main']").hide(400);
        $("[did='grs'] [pid='ggyhmpage']").show(400);
    });
    // $(".ggmy").click(function() {
    //     layer.prompt({
    //         title: "请输入新的名言"
    //     }, function(val, index) {
    //         layer.msg("更改成功");
    //         localStorage.my = val;
    //         layer.close(index);
    //         $(".myss").text(localStorage.my);
    //     });
    // });
    $(".ggmyyes").click(function() {
        var str = $(".ggmynew").val();
        if (str == "") {
            layer.msg("不得为空");
        } else if (str.length > 20) {
            layer.msg("太长了");
        } else {
            localStorage.my = str;
            $(".myss").text(localStorage.my);
            layer.msg("更改成功");
        }
    });

    $(".ggyhmyes").click(function() {
        var news = $(".grsyhmnew").val();
        if (news == "") {
            layer.msg("不得为空");
        } else if (news.length > 15) {
            layer.msg("不得超过十五个字");
        } else {
            localStorage.username = news;
            $(".grsusername").text(localStorage.username);
            $("[did='grs'] [pid='main']").show(400);
            $("[did='grs'] [pid='ggyhmpage']").hide(400);
            layer.msg("更改成功");
        }
    });
    $(".ggyhmno").click(function() {
        $("[did='grs'] [pid='main']").show(400);
        $("[did='grs'] [pid='ggyhmpage']").hide(400);
    });
    // $(".ggbz").click(function() {
    //     layer.prompt({
    //         title: "请输入壁纸路径"
    //     }, function(val, index) {
    //         layer.msg("更改成功");
    //         localStorage.bz = val;
    //         layer.close(index);
    //     });
    // });
    $(".ggbz").click(function() {
        $("[did='ses'] [pid='main']").hide(400);
        $("[did='ses'] [pid='ggbzpage']").show(400);
    });
    $(".gymn").click(function() {
        $("[did='ses'] [pid='main']").hide(400);
        $("[did='ses'] [pid='ggbzpage']").hide();
        $("[did='ses'] [pid='ggbzbd']").hide();
        $("[did='ses'] [pid='ggbzwl']").hide();
        $("[did='ses'] [pid='seegymn']").show(400);
    });
    $(".backgymn").click(function() {
        $("[did='ses'] [pid='main']").show(400);
        $("[did='ses'] [pid='ggbzpage']").hide();
        $("[did='ses'] [pid='ggbzbd']").hide();
        $("[did='ses'] [pid='ggbzwl']").hide();
        $("[did='ses'] [pid='seegymn']").hide(400);
    });
    $(".gjseno").click(function() {
        $("[did='ses'] [pid='main']").show(400);
        $("[did='ses'] [pid='ggbzpage']").hide();
        $("[did='ses'] [pid='ggbzbd']").hide();
        $("[did='ses'] [pid='ggbzwl']").hide();
        $("[did='ses'] [pid='seegymn']").hide();
        $("[did='ses'] [pid='seegjse']").hide(400);
    });
    $(".toggbzbd").click(function() {
        $("[did='ses'] [pid='ggbzpage']").hide(400);
        $("[did='ses'] [pid='ggbzwl']").hide();
        $("[did='ses'] [pid='ggbzbd']").show(400);
    });
    $(".toggbzwl").click(function() {
        $("[did='ses'] [pid='ggbzpage']").hide(400);
        $("[did='ses'] [pid='ggbzbd']").hide();
        $("[did='ses'] [pid='ggbzwl']").show(400);
    });
    $(".toggbzmr").click(function() {
        localStorage.bz = "back.jpeg";
        $("[did='sp']").css("background-image", "url(" + localStorage.bz + ")");
        $("[did='hsp']").css("background-image", "url(" + localStorage.bz + ")");
        $("[did='psp']").css("background-image", "url(" + localStorage.bz + ")");
        $("[did='hpsp']").css("background-image", "url(" + localStorage.bz + ")");
        $("[did='bin']").css("background-image", "url(" + localStorage.bz + ")");
        $("[did='hbin']").css("background-image", "url(" + localStorage.bz + ")");
        $("[did='ses'] [pid='ggbzpage']").hide(400);
        $("[did='ses'] [pid='main']").show(400);
        layer.msg("更改成功");
    });
    $(".ggbzno").click(function() {
        $("[did='ses'] [pid='ggbzpage']").hide(400);
        $("[did='ses'] [pid='main']").show(400);
    });
    $(".ggbzbdno").click(function() {
        $("[did='ses'] [pid='ggbzbd']").hide(400);
        $("[did='ses'] [pid='ggbzpage']").show(400);
    });
    var bzbdfile = localStorage.bz;
    $(".ggbzbdfile").change(function(file) {
        bzbdfile = window.URL.createObjectURL(file.target.files[0]);
    });
    $(".ggbzbdyes").click(function() {
        localStorage.bz = bzbdfile;
        $("[did='sp']").css("background-image", "url(" + localStorage.bz + ")");
        $("[did='hsp']").css("background-image", "url(" + localStorage.bz + ")");
        $("[did='psp']").css("background-image", "url(" + localStorage.bz + ")");
        $("[did='hpsp']").css("background-image", "url(" + localStorage.bz + ")");
        $("[did='bin']").css("background-image", "url(" + localStorage.bz + ")");
        $("[did='hbin']").css("background-image", "url(" + localStorage.bz + ")");
        $("[did='ses'] [pid='ggbzbd']").hide(400);
        $("[did='ses'] [pid='ggbzpage']").show(400);
        layer.msg("更改成功");
    });
    $(".ggbzwlno").click(function() {
        $("[did='ses'] [pid='ggbzwl']").hide(400);
        $("[did='ses'] [pid='ggbzpage']").show(400);
    });
    $(".ggbzwlyes").click(function() {
        if ($(".ggbzwlurl").val() != "") {
            localStorage.bz = $(".ggbzwlurl").val();
            $("[did='sp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hsp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='psp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hpsp']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='bin']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='hbin']").css("background-image", "url(" + localStorage.bz + ")");
            $("[did='ses'] [pid='ggbzwl']").hide(400);
            $("[did='ses'] [pid='ggbzpage']").show(400);
            layer.msg("更改成功");
        } else {
            layer.msg("不得为空");
        }
    });
    // $(".ggpin").click(function() {
    //     layer.prompt({
    //         title: "请输入宽屏或窄屏"
    //     }, function(val, index) {
    //         if (val == "宽屏" || val == "窄屏") {
    //             layer.msg("更改成功");
    //             localStorage.zp = val;
    //             layer.close(index);
    //         } else {
    //             layer.msg("输入错误");
    //         }
    //     });
    // });
    $(".ggpm").click(function() {
        if (localStorage.zp == "窄屏") {
            $(".ggpm p:last").css("background", "yellow");
            $(".ggpm p:first").css("background", "red");
            localStorage.zp = "宽屏";
        } else {
            $(".ggpm p:first").css("background", "yellow");
            $(".ggpm p:last").css("background", "red");
            localStorage.zp = "窄屏";
        }
        layer.msg("更改成功");
    });

    $(".ggmm").click(function() {
        $("[did='grs'] [pid='main']").hide(400);
        $("[did='grs'] [pid='ggmmpage']").show(400);
    });
    $(".ggmmyes").click(function() {
        var ymm = $(".ggmmymm").val();
        var nmm = $(".ggmmnew").val();
        var kmm = $(".ggmmknew").val();
        if (ymm == "" || nmm == "" || kmm == "") {
            layer.msg("每一项不得为空");
        } else if (ymm != localStorage.password) {
            layer.msg("原密码错误");
        } else if (nmm != kmm) {
            layer.msg("两次密码不匹配")
        } else {
            localStorage.password = nmm;
            $("[did='grs'] [pid='main']").show(400);
            $("[did='grs'] [pid='ggmmpage']").hide(400);
            layer.msg("更改成功");
        }
    });
    $(".ggmmno").click(function() {
        $("[did='grs'] [pid='main']").show(400);
        $("[did='grs'] [pid='ggmmpage']").hide(400);
    });
    $(".gggxqm").click(function() {
        $("[did='grs'] [pid='main']").hide(400);
        $("[did='grs'] [pid='gggxqmpage']").show(400);
    });
    $(".gggxqmyes").click(function() {
        localStorage.gxqm = $(".gggxqmnew").val();
        $(".grsgxqm").text(localStorage.gxqm);
        $("[did='grs'] [pid='main']").show(400);
        $("[did='grs'] [pid='gggxqmpage']").hide(400);
        layer.msg("更改成功");
    });
    $(".gggxqmno").click(function() {
        $("[did='grs'] [pid='main']").show(400);
        $("[did='grs'] [pid='gggxqmpage']").hide(400);
    });
    // $(".remove").click(function() {
    //     layer.prompt({
    //         title: "你确定吗？请输入你的密码"
    //     }, function(val, index) {
    //         if (val == localStorage.password) {
    //             layer.msg("已重置");
    //             localStorage.saves = "1";
    //             layer.close(index);
    //         } else {
    //             layer.msg("密码错误");
    //         }
    //     });
    // });
    $(".gjse").click(function() {
        layer.prompt({
            title: "请输入密码"
        }, function(val, index) {
            if (val == localStorage.password) {
                $("[did='ses'] [pid='main']").hide(400);
                $("[did='ses'] [pid='ggbzpage']").hide();
                $("[did='ses'] [pid='ggbzbd']").hide();
                $("[did='ses'] [pid='ggbzwl']").hide();
                $("[did='ses'] [pid='seegymn']").hide();
                $("[did='ses'] [pid='seegjse']").show(400);

            } else {
                layer.msg("密码错误");
            }
            layer.close(index);
        });
    });
    $(".dlsj").click(function() {
        $("[did='ses'] [pid='seegjse']").hide(400);
        $("[did='ses'] [pid='outshuju']").hide();
        $("[did='ses'] [pid='toremove']").hide();
        $("[did='ses'] [pid='inshuju']").show(400);
    });
    $(".dcsj").click(function() {
        $("[did='ses'] [pid='seegjse']").hide(400);
        $("[did='ses'] [pid='inshuju']").hide();
        $("[did='ses'] [pid='toremove']").hide();
        $("[did='ses'] [pid='outshuju']").show(400);
        $(".youshuju").text(hqsj());
    });
    $(".remove").click(function() {
        $("[did='ses'] [pid='seegjse']").hide(400);
        $("[did='ses'] [pid='outshuju']").hide();
        $("[did='ses'] [pid='inshuju']").hide();
        $("[did='ses'] [pid='toremove']").show(400);
    });
    $(".backoutshuju").click(function() {
        $("[did='ses'] [pid='seegjse']").show(400);
        $("[did='ses'] [pid='outshuju']").hide();
        $("[did='ses'] [pid='toremove']").hide();
        $("[did='ses'] [pid='inshuju']").hide(400);
    });
    $(".inshujuno").click(function() {
        $("[did='ses'] [pid='seegjse']").show(400);
        $("[did='ses'] [pid='inshuju']").hide();
        $("[did='ses'] [pid='toremove']").hide();
        $("[did='ses'] [pid='outshuju']").hide(400);
    });
    $(".removeno").click(function() {
        $("[did='ses'] [pid='seegjse']").show(400);
        $("[did='ses'] [pid='outshuju']").hide();
        $("[did='ses'] [pid='inshuju']").hide();
        $("[did='ses'] [pid='toremove']").hide(400);
    });
    $(".inshujuyes").click(function() {
        var sh = $(".inshujunew").val();
        var s = JSON.parse(sh);
        localStorage.saves = s.saves;
        localStorage.username = s.username;
        localStorage.password = s.password;
        localStorage.bz = s.bz;
        localStorage.my = s.my;
        localStorage.tx = s.tx;
        localStorage.gxqm = s.gxqm;
        localStorage.zp = s.zp;
        localStorage.appa = s.appa;
        localStorage.bbh = s.bbh;
        layer.msg("导入成功，请刷新");
    });
    $(".removeyes").click(function() {
        localStorage.saves = "1";
        layer.msg("已恢复出厂设置，请刷新");
    });
    $("[did='bin'] .toad").click(function() {
        $("[did='bin']").hide(400);
        $("[did='hbin']").hide();
        $("[did='bzs']").hide();
        $("[did='ses']").hide();
        $("[did='grs']").hide();
        $("[did='yys']").hide();
        $("[did='hyys']").hide();
        $("[did='hses']").hide();
        $("[did='hbzs']").hide();
        $("[did='hgrs']").hide();
        $("[did='hads']").hide();
        $("[did='ads']").show(400);
    });
    $("[did='hbin'] .toyy").click(function() {
        $("[did='bin']").hide();
        $("[did='hbin']").hide(400);
        $("[did='bzs']").hide();
        $("[did='ses']").hide();
        $("[did='grs']").hide();
        $("[did='ads']").hide();
        $("[did='yys']").hide();
        $("[did='hses']").hide();
        $("[did='hbzs']").hide();
        $("[did='hgrs']").hide();
        $("[did='hads']").hide();
        $("[did='hyys']").show(400);
    });
    $("[did='hbin'] .tose").click(function() {
        $("[did='bin']").hide();
        $("[did='hbin']").hide(400);
        $("[did='bzs']").hide();
        $("[did='yys']").hide();
        $("[did='grs']").hide();
        $("[did='ads']").hide();
        $("[did='hyys']").hide();
        $("[did='hbzs']").hide();
        $("[did='hgrs']").hide();
        $("[did='hads']").hide();
        $("[did='ses']").show(400);
        sesflag = 2;
    });
    $("[did='hbin'] .tobz").click(function() {
        $("[did='bin']").hide();
        $("[did='hbin']").hide(400);
        $("[did='yys']").hide();
        $("[did='ses']").hide();
        $("[did='grs']").hide();
        $("[did='ads']").hide();
        $("[did='hyys']").hide();
        $("[did='hses']").hide();
        $("[did='hgrs']").hide();
        $("[did='hads']").hide();
        $("[did='bzs']").show(400);
        bzsflag = 2;
    });
    $("[did='hbin'] .togr").click(function() {
        $("[did='bin']").hide();
        $("[did='hbin']").hide(400);
        $("[did='bzs']").hide();
        $("[did='ses']").hide();
        $("[did='yys']").hide();
        $("[did='ads']").hide();
        $("[did='hyys']").hide();
        $("[did='hses']").hide();
        $("[did='hbzs']").hide();
        $("[did='grs']").show(400);
        $("[did='hads']").hide();
        $(".grsusername").text(localStorage.username);
        $(".grsgxqm").text(localStorage.gxqm);
        $(".grstx").attr("src", localStorage.tx);
        grsflag = 2;
    });
    $("[did='hbin'] .toad").click(function() {
        $("[did='bin']").hide();
        $("[did='hbin']").hide(400);
        $("[did='bzs']").hide();
        $("[did='ses']").hide();
        $("[did='grs']").hide();
        $("[did='yys']").hide();
        $("[did='hyys']").hide();
        $("[did='hses']").hide();
        $("[did='hbzs']").hide();
        $("[did='hgrs']").hide();
        $("[did='ads']").hide();
        $("[did='hads']").show(400);
    });
    $("[did='hbin'] .tozp").click(function() {
        $(".in").css("width", "400px");
        $(".activity").css("width", "370px");
        $("[did='hbin']").hide(400);
        $("[did='bin']").show(400);
        $("[did='bzs']").hide();
        $("[did='ses']").hide();
        $("[did='grs']").hide();
        $("[did='ads']").hide();
        $("[did='yys']").hide();
        $("[did='hyys']").hide();
        $("[did='hses']").hide();
        $("[did='hbzs']").hide();
        $("[did='hgrs']").hide();
        $("[did='hads']").hide();
    });
    $("[did='bin'] .tokp").click(function() {
        $(".in").css("width", "770px");
        $(".activity").css("width", "730px");
        $("[did='bin']").hide(400);
        $("[did='hbin']").show(400);
        $("[did='bzs']").hide();
        $("[did='ses']").hide();
        $("[did='grs']").hide();
        $("[did='ads']").hide();
        $("[did='yys']").hide();
        $("[did='hyys']").hide();
        $("[did='hses']").hide();
        $("[did='hbzs']").hide();
        $("[did='hgrs']").hide();
        $("[did='hads']").hide();
    });
    $("[did='ads'] .hd .tc").click(function() {
        $("[did='ads'").hide(400);
        $("[did='bin']").show(400);
    });
    $("[did='bzs'] .hd .tc").click(function() {
        $("[did='bzs'").hide(400);
        if (bzsflag == 1) {
            $("[did='bin']").show(400);
        } else {
            $("[did='hbin']").show(400);
        }
    });
    $("[did='ses'] .hd .tc").click(function() {
        $("[did='ses'").hide(400);
        if (sesflag == 1) {
            $("[did='bin']").show(400);
        } else {
            $("[did='hbin']").show(400);
        }
    });
    $("[did='app1'] .hd .tc").click(function() {
        $("[did='app1'").hide(400);
        $("[did='yys']").show(400);
    });
    $("[did='happ1'] .hd .tc").click(function() {
        $("[did='happ1'").hide(400);
        $("[did='hyys']").show(400);
    });
    $("[did='app2'] .hd .tc").click(function() {
        $("[did='app2'").hide(400);
        if (app2flag == 1) {
            $("[did='yys']").show(400);
        } else {
            $("[did='hyys']").show(400);
        }
    });
    $("[did='app3'] .hd .tc").click(function() {
        $("[did='app3'").hide(400);
        if (app3flag == 1) {
            $("[did='yys']").show(400);
        } else {
            $("[did='hyys']").show(400);
        }
    });
    $("[did='app4'] .hd .tc").click(function() {
        $("[did='app4'").hide(400);
        if (app4flag == 1) {
            $("[did='yys']").show(400);
        } else {
            $("[did='hyys']").show(400);
        }
    });
    $("#File").change(function(file) {
        $("body").append(file.target.files[0]);
        var url = window.URL.createObjectURL(file.target.files[0]);
        $("#player")[0].src = url;
        $("#player")[0].onload = function() {
            window.URL.revokeObjectURL(src);
        };
        var names = $("#File").val();
        var res = names.split("\\");
        $("#dem").html(res[res.length - 1]);
        $(".togo button").text("更改音乐");
    });
    $("[did='yys'] .toapp1").click(function() {
        $("[did='app1'").show(400);
        $("[did='yys']").hide(400);
    });
    $("[did='hyys'] .toapp1").click(function() {
        $("[did='happ1'").show(400);
        $("[did='hyys']").hide(400);
    });
    $("[did='yys'] .toapp2").click(function() {
        $("[did='app2'").show(400);
        app2flag = 1;
        $("[did='yys']").hide(400);
    });
    $("[did='hyys'] .toapp2").click(function() {
        $("[did='app2'").show(400);
        app2flag = 2;
        $("[did='hyys']").hide(400);
    });
    $("[did='yys'] .toapp3").click(function() {
        $("[did='app3'").show(400);
        app3flag = 1;
        $("[did='yys']").hide(400);
    });
    $("[did='hyys'] .toapp3").click(function() {
        $("[did='app3'").show(400);
        app3flag = 2;
        $("[did='hyys']").hide(400);
    });
    $("[did='yys'] .toapp4").click(function() {
        $("[did='app4'").show(400);
        app4flag = 1;
        $("[did='yys']").hide(400);
    });
    $("[did='hyys'] .toapp4").click(function() {
        $("[did='app4'").show(400);
        app4flag = 2;
        $("[did='hyys']").hide(400);
    });
    $("[did='grs'] .hd .tc").click(function() {
        $("[did='grs'").hide(400);
        if (grsflag == 1) {
            $("[did='bin']").show(400);
            $("[did='hbin']").hide();
        } else {
            $("[did='hbin']").show(400);
            $("[did='bin']").hide();
        }
    });
    $("[did='yys'] .hd .tc").click(function() {
        $("[did='yys'").hide(400);
        $("[did='bin']").show(400);
    });
    $("[did='hads'] .hd .tc").click(function() {
        $("[did='hads'").hide(400);
        $("[did='hbin']").show(400);
    });
    $("[did='hyys'] .hd .tc").click(function() {
        $("[did='hyys'").hide(400);
        $("[did='hbin']").show(400);
    });
    $("[did='hses'] .hd .tc").click(function() {
        $("[did='hses'").hide(400);
        $("[did='hbin']").show(400);
    });
    $("[did='hbzs'] .hd .tc").click(function() {
        $("[did='hbzs'").hide(400);
        $("[did='hbin']").show(400);
    });
}
