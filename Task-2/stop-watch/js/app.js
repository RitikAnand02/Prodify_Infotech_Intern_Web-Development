window.onload = function () {

    var hour = 00;
    var minute = 00;
    var centiSecond = 00;
    var second = 00;
    var Interval;

    // accessing hour, minute, seconds and centiseconds from document
    var hourElement = document.getElementById("hour");
    var minuteElement = document.getElementById("minute");
    var secondElement = document.getElementById("second");
    var centiSecondElement = document.getElementById("centisecond");
    var timeElement = document.getElementById("time");

    // accessing the stop time display
    var timeList = document.getElementById("time_list");


    // accessing the three buttons - start, stop and reset
    var bStart = document.getElementById("start");
	var bStop = document.getElementById("stop");
	var bReset= document.getElementById("reset");
    var running = false;


    // Adding event listeners for the buttons
    // For start button
    bStart.onclick = function() {
    	clearInterval(Interval);
        // start new interval
        running = true;
        timeElement.style.border = "3px solid #40916c";
        // call every 10 milliseconds
    	Interval = setInterval(timer, 10);
    }

    // For stop button
    bStop.onclick = function() {
        // clear interval (stop time)
        if (running) {
            running = false;
            timeElement.style.border = "3px solid #c9184a";
            // add the selected stop time to UI
            var innerContent = "<li>" + hour + " : "  + minute + " : " + second + " : " + centiSecond + "</li>";
            timeList.insertAdjacentHTML("afterbegin", innerContent);

            // clear interval
            clearInterval(Interval);
        }
    	clearInterval(Interval);
    }

    // For reset button
    bReset.onclick = function() {
        timeElement.style.border = "3px solid #0077b6";
    	clearInterval(Interval);
        running = false;
        // reset all values to zero
        hour = "00"
    	minute = "00";
        second = "00";
    	centiSecond = "00";
        hourElement.innerHTML = hour;
        minuteElement.innerHTML = minute;
        secondElement.innerHTML = second;
        centiSecondElement.innerHTML = centiSecond;
        timeList.innerHTML = "";
    }

    // timer function which starts on each interval
    function timer() {

        centiSecond++;

        // -------------------------- for centiseconds ------------------------------
        // if centiseconds is less than 10, prepend 0
        if (centiSecond <= 9) {
            centiSecondElement.innerHTML = "0" + centiSecond;
        }
        // if centiseconds is greater than 10, replace as it is
        if (centiSecond > 9) {
            centiSecondElement.innerHTML = centiSecond;
        }
        // if centiseconds is greater than 99, increment second and reset centisecond 
        if (centiSecond > 99) {
            second++;
            secondElement.innerHTML = "0" + second;
            centiSecond = 0;
            centiSecondElement.innerHTML = "0" + 0;
        }
        // -----------------------------------------------------------------------


        // -------------------------- for seconds ------------------------------
        // if seconds is greater than 10, save as it is
        if (second > 9) {
            secondElement.innerHTML = second;
        }

        // if seconds is greater than 59, increment minute and reset second
        if (second > 59) {
            minute++;
            minuteElement.innerHTML = "0" + minute;
            second = 0;
            secondElement.innerHTML = "0" + 0;
        }
        // if minutes is greater than 10, replace as it is
        if (minute > 9) {
            minuteElement.innerHTML = minute;
        }
        // -----------------------------------------------------------------------

        // -------------------------- for minutes ------------------------------
        // if seconds is greater than 10, save as it is
        if (minute > 9) {
            minuteElement.innerHTML = minute;
        }
        // if seconds is greater than 59, increment minute and reset second
        if (minute > 59) {
            hour++;
            hourElement.innerHTML = "0" + hour;
            minute = 0;
            minuteElement.innerHTML = "0" + 0;
        }
        // if minutes is greater than 10, replace as it is
        if (hour > 9) {
            minuteElement.innerHTML = hour;
        }      
        // -----------------------------------------------------------------------

        // if hour exits 59, reset
        if(hour>59) {
            hour = "00";
            minute = "00";
            second = "00";
            centiSecond = "00";
            hourElement.innerHTML = hour;
            minuteElement.innerHTML = minute;
            secondElement.innerHTML = second;

            // remove all stop time from UI
            centiSecondElement.innerHTML = centiSecond;            
        }

    }

}