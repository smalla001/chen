starttime();

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

var zho = "1e368";
$("[did='Load']").hide();
$(".app").hide();
$("[did='wel1']").show(400);
var app2flag;
if (localStorage.saves == undefined || localStorage.saves == "1") {
    localStorage.saves = "1";
    localStorage.username = "";
    localStorage.password = "";
    localStorage.zp = "窄屏";
    localStorage.tx = "admin.png";
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
        content: "&nbsp;&nbsp;&nbsp;&nbsp;你忘记了密码，必须通过清除数据的方式<br>登录，确定清除数据？",
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
        content: "&nbsp;&nbsp;&nbsp;&nbsp;你忘记了密码，必须通过清除数据的方式<br>登录，确定清除数据？",
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
$(".drc").click(function() {
    layer.prompt({
        title: "导入数据向导"
    }, function(val, index) {
        var dataobj = JSON.parse(val);
        localStorage.saves = dataobj.saves;
        localStorage.username = dataobj.username;
        localStorage.password = dataobj.password;
        localStorage.zp = dataobj.zp;
        localStorage.tx = dataobj.tx;
        localStorage.gxqm = dataobj.gxqm;
        localStorage.bz = dataobj.bz;
        localStorage.my = dataobj.my;
        localStorage.appa = dataobj.appa;
        localStorage.bbh = dataobj.bbh;
        layer.msg("导入成功");
    });
});
$(".dcr").click(function() {
    layer.open({
        title: "你的所有数据，请复制到你的记事本或便签保存",
        content: "<p style='user-select: text;'>" + hqsj() + "</p>"
    });
});

function hqsj() {
    var datajson = '{"saves":"' + localStorage.saves +
        '",<br>"username":"' + localStorage.username +
        '",<br>"password":"' + localStorage.password +
        '",<br>"zp":"' + localStorage.zp +
        '",<br>"tx":"' + localStorage.tx +
        '",<br>"gxqm":"' + localStorage.gxqm +
        '",<br>"bz":"' + localStorage.bz +
        '",<br>"my":"' + localStorage.my +
        '",<br>"appa":"' + localStorage.appa +
        '",<br>"bbh":"' + localStorage.bbh + '"}';
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
    $("[did='hses']").hide();
    $("[did='hbzs']").hide();
    $("[did='hgrs']").hide();
    $("[did='hads']").hide();
    $("[did='ses']").show(400);
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
    $("[did='hbzs']").hide();
    $("[did='hgrs']").hide();
    $("[did='hads']").hide();
    $("[did='bzs']").show(400);
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
    $("[did='hgrs']").hide();
    $("[did='hads']").hide();
    $("[did='grs']").show(400);
    $(".grsusername").text(localStorage.username);
    $(".grsgxqm").text(localStorage.gxqm);
    $(".grstx").attr("src", localStorage.tx);
});
$(".ggtx").click(function() {
    layer.prompt({
        title: "请输入头像路径"
    }, function(val, index) {
        layer.msg("更改成功");
        localStorage.tx = val;
        layer.close(index);
        $(".grsusername").text(localStorage.username);
        $(".grsgxqm").text(localStorage.gxqm);
        $(".grstx").attr("src", localStorage.tx);
    });
});
$(".ggyhm").click(function() {
    layer.prompt({
        title: "请输入新的用户名"
    }, function(val, index) {
        layer.msg("更改成功");
        localStorage.username = val;
        layer.close(index);
        $(".grsusername").text(localStorage.username);
        $(".grsgxqm").text(localStorage.gxqm);
        $(".grstx").attr("src", localStorage.tx);
    });
});
$(".ggmy").click(function() {
    layer.prompt({
        title: "请输入新的名言"
    }, function(val, index) {
        layer.msg("更改成功");
        localStorage.my = val;
        layer.close(index);
        $(".myss").text(localStorage.my);
    });
});
$(".gyour").click(function() {
    layer.open({
        title: "关于我们",
        content: "<h1>关于小A</h1><p style='text-indent:2em;'>我们是由陈思全做的一个系统，内容完全由他独自一人编写，切勿抄袭，否则后果自负。</p><h1>资源引用</h1><h2>JQuery</h2><p><b>目的：</b>所有代码都是以它为基础编写</p><h2>Bootstrap Icons,Font Awesome</h2><p><b>目的：</b>应用引用图标</p><h2>layer</h2><p><b>目的：</b>系统弹出层</p>"
    });
});
$(".gxdata").click(function() {
    layer.open({
        title: "更新日志",
        content: "<h2>0.73</h2><p><b>更新内容：</b>底部名言自定义<br>设置添加关于和更新日志<br></p>"
    });
});
$(".ggbz").click(function() {
    layer.prompt({
        title: "请输入壁纸路径"
    }, function(val, index) {
        layer.msg("更改成功");
        localStorage.bz = val;
        layer.close(index);
    });
});
$(".ggpin").click(function() {
    layer.prompt({
        title: "请输入宽屏或窄屏"
    }, function(val, index) {
        if (val == "宽屏" || val == "窄屏") {
            layer.msg("更改成功");
            localStorage.zp = val;
            layer.close(index);
        } else {
            layer.msg("输入错误");
        }
    });
});
$(".ggmm").click(function() {
    layer.prompt({
        title: "请输入原密码"
    }, function(val, index) {
        if (val == localStorage.password) {
            layer.prompt({
                title: "请输入新密码"
            }, function(val, index) {
                layer.msg("更改成功");
                localStorage.password = val;
                layer.close(index);
            });
        } else {
            layer.msg("密码不正确");
        }
        layer.close(index);
    });
});
$(".gggxqm").click(function() {
    layer.prompt({
        title: "请输入你的个性签名"
    }, function(val, index) {
        layer.msg("更改成功");
        localStorage.gxqm = val;
        layer.close(index);
        $(".grsusername").text(localStorage.username);
        $(".grsgxqm").text(localStorage.gxqm);
        $(".grstx").attr("src", localStorage.tx);
    });
});
$(".remove").click(function() {
    layer.prompt({
        title: "你确定吗？请输入你的密码"
    }, function(val, index) {
        if (val == localStorage.password) {
            layer.msg("已重置");
            localStorage.saves = "1";
            layer.close(index);
        } else {
            layer.msg("密码错误");
        }
    });
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
    $("[did='ses']").hide();
    $("[did='hbzs']").hide();
    $("[did='hgrs']").hide();
    $("[did='hads']").hide();
    $("[did='hses']").show(400);
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
    $("[did='bzs']").hide();
    $("[did='hgrs']").hide();
    $("[did='hads']").hide();
    $("[did='hbzs']").show(400);
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
    $("[did='grs']").hide();
    $("[did='hads']").hide();
    $("[did='hgrs']").show(400);
    $(".grsusername").text(localStorage.username);
    $(".grsgxqm").text(localStorage.gxqm);
    $(".grstx").attr("src", localStorage.tx);
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
    $("[did='bin']").show(400);
});
$("[did='ses'] .hd .tc").click(function() {
    $("[did='ses'").hide(400);
    $("[did='bin']").show(400);
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
    $(".src .togo button").text("更改音乐");
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
$("[did='grs'] .hd .tc").click(function() {
    $("[did='grs'").hide(400);
    $("[did='bin']").show(400);
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
$("[did='hgrs'] .hd .tc").click(function() {
    $("[did='hgrs'").hide(400);
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
