var g_Interval = 1;
var AllPerson = 10000; // 參加總人數
var g_PersonCount = [];//参加抽奖人数號碼牌
var g_Old =[];
var g_Timer;
var running = false;
var preNum ;
var runed = false; 
var adariNum = 2 //全部獎項數;
for(var i=0;i<AllPerson;i++){
	a = String(i);
	if(a.length==1){
		g_PersonCount.push("000"+i);
	}else if(a.length==2){
		g_PersonCount.push("00"+i)
	}else if(a.length==3){
		g_PersonCount.push("0"+i)
	}else if(a.length==4){
		g_PersonCount.push(i)
	}
}
function beginRndNum(trigger){
	if( adariNum < AllPerson-g_PersonCount.length){
			$('#ResultNum').text('已全數領獎');
			running = false;

		}else{
			if(running){
				running = false;
				g_PersonCount[preNum] = "";
				g_Old = $.extend(true,[], g_PersonCount);
				g_PersonCount = [];
				for(var j = 0; j < g_Old.length; j++){
					if(g_Old[j] !== ""){
						g_PersonCount.push(g_Old[j]);
					}
				}
				clearTimeout(g_Timer);		
				$(trigger).val("開始");
				$('#ResultNum').css('color','red');
			}
			else{
				running = true;
				$('#ResultNum').css('color','black');
				$(trigger).val("停止");
				beginTimer();
			}
	}
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