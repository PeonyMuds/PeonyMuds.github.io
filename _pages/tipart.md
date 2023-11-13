---
layout: page
permalink: /tipart/
title: Tipart
description: A rather clumsy but funny gadget that helps to design the patterns formed by yellow and white 200 µL pipette tips.
nav: false # change this to make this present or absent on navbar
nav_order: 99
---

<style>
  table {
    border-collapse: separate;
    border-spacing: 4px 4px;
  }

  td {
    padding: 2px 6px;
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

<h2>The Tool</h2>
  Click to insert or change the color of the tips.<br>
  Change the types/brands of tip boxes:
  <select onchange="changeSquareColor(this.value)">
    <option value="#D45C69">Axygen®️ Red</option>
    <option value="#3A6CBC">Thermo Scientific™ ART™ Blue</option>
    <option value="#90508C">Thermo Scientific™ QSP™ Purple</option>
  </select>
  <br>
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
      </tr>
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
      </tr>
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
      </tr>
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
      </tr>
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
      </tr>
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
      </tr>
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
      </tr>
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
      </tr>
    </table>
  </div>