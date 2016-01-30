var g_Interval = 1;
var AllPerson = 7; // 參加總人數
var g_PersonCount = ['Ilandy Chiu','Matt Lee','Hal Chiu','Austin Chang','Matt Chen','Timothy Su','Paggy Chen'];//参加抽奖人数號碼牌
var g_Old =[];
var g_Timer;
var running = false;
var preNum =7;
var runed = false; 
var adariNum = 7; //全部獎項數

function beginRndNum(trigger){
	if( g_PersonCount.length === 1){
		$(trigger).hide();
		$('h1').text('最後一位闖關者!!');
		$('#ResultNum').text(g_PersonCount[0]);
	} else {
		if(running){

			running = false;
			clearTimeout(g_Timer);		
			$(trigger).text("開始");
			$('#ResultNum').css('color','red');
			g_PersonCount[preNum] = "";
			g_Old = $.extend(true,[], g_PersonCount);
			g_PersonCount = [];
			for(var j = 0; j < g_Old.length; j++){
				if(g_Old[j] !== ""){
					g_PersonCount.push(g_Old[j]);
				}
			}

		} else {
			running = true;
			$('#ResultNum').css('color','black');
			$(trigger).text("停止");
			beginTimer();
			
		}
	}
	console.log(g_PersonCount.length);
}

function updateRndNum(){
	var num = Math.floor(Math.random()*g_PersonCount.length);
	preNum = num;
	$('#ResultNum').text(g_PersonCount[num]);
}

function beginTimer(){
	g_Timer = setTimeout(beat, g_Interval);
}

function beat() {
	g_Timer = setTimeout(beat, g_Interval);
	updateRndNum();
}