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
    $("[did='wel1']").show(400);
    if (localStorage.saves == undefined || localStorage.saves == "1") {
        localStorage.saves = "1";
        localStorage.username = "";
        localStorage.password = "";
        localStorage.zp = "窄屏";
        localStorage.tx = "admin.png";
        localStorage.gxqm = "我是一个人";
        localStorage.bz = "back.jpeg";
        $("[did='wel1']").show(400);
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

