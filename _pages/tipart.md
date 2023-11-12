---
layout: page
permalink: /tipart/
title: Tipart
description: A rather clumsy but funny gadget that helps to design the patterns formed by yellow and white 200 µL pipette tips.
nav: false # change this to make this present or absent on navbar
nav_order: 99
---

<html>
<style>
      html {
      }

      table {
        border-collapse: separate;
        border-spacing: 15px 0px;
      }

      td {
        padding: 4px 0px;
      }

      .square {
        border: 5px solid black;
        padding: 5px 5px;
        width: 550px;
        height: 400x;
        border-radius: 5px;
        background-color: #D45C69;
      }

      .dot {
        height: 30px;
        width: 30px;
        background-color: #FFFFFF;
        border-radius: 50%;
        display: inline-block;
      }

      body {
        caret-color: transparent;
      }
            
      .container {
        display: flex;
      }
               
      .gallery {
        display: flex;
        flex-wrap: wrap;
      }
      .gallery-item {
        position: relative;
        width: 300px;
        margin: 10px;
        overflow: hidden;
      }
      .gallery-item img {
        width: 100%;
        height: 100%;
        transition: transform 0.3s;
      }
      .gallery-item:hover img {
        transform: scale(1.1);
      }
      .gallery-item .comment {
        text-align: center;
        font-style: italic;
        margin-top: 10px;
      }
      
      button {
        display: inline-block;
        background-color: white;
        padding: 5px;
        width: 270px;
        color: black;
        text-align: center;
        border: 5px #bbbbbb;
        border-radius: 3px;
        font-family: Times New Roman;
        font-size: 16px;
        cursor: pointer;
        margin: 5px;
        -webkit-transition: all 0.4s;
        -moz-transition: all 0.4s;
        -o-transition: all 0.4s;
        transition: all 0.4s;
      }
      
      button:hover {
        background-color: #f0f0f0;
      }
      
</style>

<script>
  function changeColor(dot) {
    if (dot.style.backgroundColor == "yellow") {
      dot.style.backgroundColor = "#FFFFFF";
    } else {
      dot.style.backgroundColor = "yellow";
    }
  }

  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

  function changeSquareColor(color) {
    document.querySelector(".square").style.backgroundColor = color;
  }
  
    function alldotsyellow() {
      var dots = document.getElementsByClassName('dot');
      for (var i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = 'yellow';
      }
    }
  
    function alldotswhite() {
      var dots = document.getElementsByClassName('dot');
      for (var i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = '#FFFFFF';
      }
    }
    
</script>


<body>
        Click to insert or change the color of the tips.<br>
        Change the types/brands of tip boxes:
        <select onchange="changeSquareColor(this.value)">
          <option value="#D45C69">Axygen®️ Red</option>
          <option value="#3A6CBC">Thermo Scientific™ ART™ Blue</option>
          <option value="#90508C">Thermo Scientific™ QSP™ Purple</option>
        </select>
        <br>
        
        <div class="square">
          <table>
            <tr>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
            <tr>
            <tr>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
            <tr>
            <tr>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
            <tr>
            <tr>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
            <tr>
            <tr>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
            <tr>
            <tr>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
            <tr>
            <tr>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
            <tr>
            <tr>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
              <td><span class="dot" onclick="changeColor(this)"></span></td>
            <tr>
            </table>
        </div>
        </div>


        <br>
          <div>
          	<button onclick="alldotsyellow()">Yellow tips. Let's Go!</button>
            
            <button onclick="alldotswhite()">Nah. I want it all white.</button>
          </div>
        <div>	
          <h2>Gallery</h2>
          
          	<h4>Letters</h4>
          	
                  <div class="gallery">
                                       
                      <div class="gallery-item">
                        <img src="assets/tipart/work/FBS.png" alt="FBS">
                        <div class="comment">Would it still be serum-free if your tips say FBS?</div>
                      </div>


                      <div class="gallery-item">
                        <img src="assets/tipart/work/RA.png" alt="RA">
                        <div class="comment">Do you mean retinoic acid or research assistants?</div>
                      </div>
                                   
                      <div class="gallery-item">
                        <img src="assets/tipart/work/UM.png" alt="UM">
                        <div class="comment">UM!</div>
                      </div>
                    
                      <div class="gallery-item">
                        <img src="assets/tipart/work/FHS.png" alt="FHS">
                        <div class="comment">FHS!</div>
                      </div>
                                          
                      <div class="gallery-item">
                        <img src="assets/tipart/work/hPSC.png" alt="hPSC">
                        <div class="comment">Human Pluripotent Stem Cells.</div>
                      </div>
	   			</div>
                
                <h4>Patterns</h4>
          	
                  <div class="gallery">
                                       
                      <div class="gallery-item">
                        <img src="assets/tipart/work/plane.png" alt="Plane">
                        <div class="comment">Can we pretend that airplanes in the night sky 
                        are like shooting stars? —— Bobby Ray Simmons, Jr.</div>
                      </div>


                      <div class="gallery-item">
                        <img src="assets/tipart/work/Smilingface.png" alt="Smile">
                        <div class="comment">Got some good results today, huh.</div>
                      </div>
	   			</div>
                
                <h4>Special Edition: 11 Feb.</h4>
          	
                  <div class="gallery">                                       
                      <div class="gallery-item">
                        <img src="assets/tipart/work/heelson.png" alt="Heel">
                        <div class="comment">High heels, don't care. </div>
                      </div>                      
	   			</div>

                <h4>
                <p style="font-family:'Times New Roman','STZhongsong';">
                Special Edition: 14 Feb., 520, and Qixi 七夕.
                </p>
                </h4>
                <p style="font-size: 20px; font-family:'Times New Roman','STZhongsong';">
                In addition to the western Valentine’s Day, we also have 520 and Qixi festival 七夕.
                In Chinese, the number 520 (20 May) sounds like 我爱你 (I love you), while 
                Qixi is the day in Chinese legends when the separated lovers break through barriers to reunite 
                because of their sincere love.
                On these days, people express their love to the people they love. 
                Couples celebrate and lovers gather together.
                The patterns composed of tips can also convey some clumsy, yet sincere feelings,
                since you have to insert these tips yourself and bearing them poking your hands constantly
                (but please remember to send a 红包 red envelope with the photo, otherwise you will bear the consequences).
                
                </p>
          	
                  <div class="gallery">
                                       
                      <div class="gallery-item">
                        <img src="assets/tipart/work/heart.png" alt="❤️">
                        <div class="comment">❤️.</div>
                      </div>


                      <div class="gallery-item">
                        <img src="assets/tipart/work/IluvU.png" alt="❤️">
                        <div class="comment">I ❤️ you.</div>
                      </div>
	   			</div>

      </div>
    </div>
</body>

</html>