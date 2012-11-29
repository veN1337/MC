/*
Copyright (C) 2012  Oliver van der Bürie

Dieses Programm ist freie Software. Sie können es unter den Bedingungen der GNU General Public License, wie von der Free Software Foundation veröffentlicht, weitergeben und/oder modifizieren, entweder gemäß Version 3 der Lizenz oder (nach Ihrer Option) jeder späteren Version.

Die Veröffentlichung dieses Programms erfolgt in der Hoffnung, daß es Ihnen von Nutzen sein wird, aber OHNE IRGENDEINE GARANTIE, sogar ohne die implizite Garantie der MARKTREIFE oder der VERWENDBARKEIT FÜR EINEN BESTIMMTEN ZWECK. Details finden Sie in der GNU General Public License.

Sie sollten ein Exemplar der GNU General Public License zusammen mit diesem Programm erhalten haben. Falls nicht, siehe <http://www.gnu.org/licenses/>.

mc.js  Copyright (C) 2012  [Name des Autors] Für dieses Programm besteht KEINERLEI GARANTIE!
Dies ist freie Software, die Sie unter bestimmten Bedingungen weitergeben dürfen.

*/

var show = function(nav){
	switch(nav){
		case 'bwl':
			var txt = "<a href='javascript:mcload(\"bwl/MC_Vorlesung1.js\")'><span class='btn'>Vorlesung 1</span></a>&nbsp;&nbsp;&nbsp;<a href='javascript:mcload(\"bwl/MC_Vorlesung2.js\")'><span class='btn'>Vorlesung 2</span></a>&nbsp;&nbsp;&nbsp;<a href='javascript:mcload(\"bwl/MC_Vorlesung3.js\")'><span class='btn'>Vorlesung 3</span></a>";
			break;
		case "mtp":
			var txt = "not yet implemented";
			break;
		case "ktn":
			var txt = "<a href='javascript:mcload(\"ktn/prak1.js\")'><span class='btn'>Praktikum 1</a>&nbsp;&nbsp;&nbsp;<a href='javascript:mcload(\"ktn/Protokolle.js\")'><span class='btn'>Protokolle</a>&nbsp;&nbsp;&nbsp;";
			break;
		case 'cga':
			var txt = "not yet implemented";
			break;
		case 'wba':
			var txt = "not yet implemented";
			break;
		case 'ma':
			var txt = "<a href='javascript:mcload(\"ma/MC_lexikon.js\")'><span class='btn'>Allg. Begriffe</a>";
	}
	$('#header').html("<a href='javascript:gotohome()'><span class='btn'>Home</span></a>"+txt);
}
function arrayShuffle(arr){
  var tmp, rand;
  for(var i =0; i < arr.length; i++){
    rand = Math.floor(Math.random() * arr.length);
    tmp = arr[i]; 
    arr[i] = arr[rand]; 
    arr[rand] =tmp;
  }
  return arr;
}

var mcload = function(file){
	$.getScript(file,function(data){
		$('#content').html("");
		$('#content').append('<div id="Question" class="fs"></div><div id="Answer" class="fs"></div><div id="kans" class="fs"></div><div id="abtn">&nbsp;</div>');
		var numbers = new Array();
		a = arrayShuffle(a);
		for(i=0;i<a.length;i++){
			var num = 0;
			while(num < a.length){
				var rnd = Math.floor((Math.random()*a.length)+1);
				numbers.push(rnd);
				num++;
			}
		}
		$('#Question').append("<div id='q0'><br>" + a[0].Frage + "</div>");
		$('#abtn').append("<div id='b0'><a href='javascript:answer(0);'><span class='btn'>Antwort</span></a>&nbsp;&nbsp;&nbsp;<a href='javascript:next(0);'><span class='btn'>N&auml;chste Frage</span></a></div>");
		for(i=1;i<a.length;i++){
			$('#Question').append("<div id='q"+i+"' class='hidden'><br>" + a[i].Frage + "</div>");
			$('#abtn').append("<div id='b"+i+"' class='hidden'><a href='javascript:answer("+i+");'><span class='btn'>Antwort</span></a>&nbsp;&nbsp;&nbsp;<a href='javascript:next("+i+");'><span class='btn'>N&auml;chste Frage</span></a></div>");
		}
		for(i=0;i<a.length;i++){
			$('#Answer').append("<div id='a"+i+"' class='hidden'><br>" + a[i].Antwort + "</div>");
			if(a[i].Kurz){
				$('#kans').append("<div id='kuant"+i+"' class='hidden'><br>"+a[i].Kurz+"</div>");
			}
		}

	});
}

var answer = function(Ant){
	$("#a"+Ant).removeClass('hidden');
	$("#kuant"+Ant).removeClass('hidden');
}

var next = function(n){
	$("#a"+n).addClass('hidden');
	$("#q"+n).addClass('hidden');
	$("#b"+n).addClass('hidden');
	$("#kuant"+n).addClass('hidden');
	$("#q"+(n+1)).removeClass('hidden');
	$("#b"+(n+1)).removeClass('hidden');
}

var gotohome = function(){
	var navtext = '<a href="javascript:show(\'bwl\');"><span class=\'btn\'>BWL</span></a>\n<a href="javascript:show(\'cga\');"><span class=\'btn\'>CGA</span></a>\n<a href="javascript:show(\'ktn\');"><span class=\'btn\'>KTN</span></a>\n<a href="javascript:show(\'mtp\');"><span class=\'btn\'>MTP</span></a>\n<a href="javascript:show(\'wba\');"><span class=\'btn\'>WBA</span></a>\n<a href="javascript:show(\'ma\');"><span class=\'btn\'>Mathe</span></a>\n<a href="javascript:show(\'ti\');"><span class=\'btn\'>TI</span></a>';
	$("#Question").remove();
	$("#Answer").remove();
	$('#abtn').remove();
	$('#kans').remove();
	$("#header").html(navtext);
}