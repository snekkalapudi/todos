(function(){dust.register("stats.dust",body_0);function body_0(chk,ctx){return chk.section(ctx.get("done"),ctx,{"else":body_1,"block":body_5},null);}function body_1(chk,ctx){return chk.write("<div class=\"todo-count\"><b>").reference(ctx.get("remaining"),ctx,"h").write("</b> ").helper("if",ctx,{"else":body_2,"block":body_3},{"cond":body_4});}function body_2(chk,ctx){return chk.write(" items left</div>");}function body_3(chk,ctx){return chk.write(" item ");}function body_4(chk,ctx){return chk.reference(ctx.get("remaining"),ctx,"h").write(" == 1");}function body_5(chk,ctx){return chk.write(" <a id=\"clear-completed\">Clear ").reference(ctx.get("done"),ctx,"h").write(" completed ").helper("if",ctx,{"else":body_6,"block":body_7},{"cond":body_8});}function body_6(chk,ctx){return chk.write(" items></a>");}function body_7(chk,ctx){return chk.write(" item ");}function body_8(chk,ctx){return chk.reference(ctx.get("done"),ctx,"h").write(" == 1");}return body_0;})();