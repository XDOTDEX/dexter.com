<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://raw.githack.com/JokeFat/modernity/main/css/stylify2fix.css"></link>
<nav class="navbar" bg="grayscale30">
    <div class="container">
      <ul class="nav-list">
        <li class="nav-item"><a href="#a" class="nav-link">Alert</a></li>
        <li class="nav-item"><a href="#l" class="nav-link">Loader</a></li>
        <li class="nav-item"><a href="#n" class="nav-link">Navbar</a></li>
        <li class="nav-item"><a href="#b" class="nav-link">Bento</a></li>
        <li class="nav-item"><a href="#s" class="nav-link">Slide</a></li>
        <li class="nav-item"><a href="#u" class="nav-link">Button</a></li>
        <li class="nav-item"><a href="#d" class="nav-link">Dropdown</a></li>
        <li class="nav-item"><a href="#c" class="nav-link">Color</a></li>
        <li class="nav-item"><a href="#f" class="nav-link">Font</a></li>
        <li class="nav-item"><a href="#i" class="nav-link">Input</a></li>
        <li class="nav-item"><a href="#bb" class="nav-link">Blur</a></li>
        <li class="nav-item"><a href="#ll" class="nav-link">List</a></li>
        <li class="nav-item"><a href="#aa" class="nav-link">Accordion</a></li>
        <li class="nav-item"><a href="#r" class="nav-link">Range</a></li>
        <li class="nav-item"><a href="#li" class="nav-link">Links</a></li>
      </ul>
    </div>
</nav>
</head>
<body bg="grayscale1">
<br />
<br />
<br />
<br />
<!--Alert-->
<link href="https://raw.githack.com/JokeFat/modernity/main/css/style.css" rel="stylesheet">
  <div class="modal" id="myModal">
    <div class="modal-content" id="modalContent">
      <span class="close" onclick="closeModal()">&times;</span>
      <h2 id="modalTitle"></h2>
      <p id="modalText"></p>
      <div class="modal-buttons">
        <button onclick="onYes()">Yes</button>
        <button onclick="onNo()">No</button>
        <button onclick="toggleDarkMode()" >Dark Mode</button>
      </div>
    </div>
  </div>
  <script src="https://raw.githack.com/JokeFat/modernity/main/js/script.js"></script>
  <script>
    setModalContent("Stylify.CSS", "Alpha launch of Stylify.CSS!");
  </script>
  <center>
<div class="bento-grid" bg="grayscale30" id="a" style="border-radius:10px;width:90%;overflow-y:hidden;overflow-x:auto" cg="grayscale1">
<h1 cg="pink30">Alert:</h1>
<p style="margin-top:35px">Use this code</p>
</div>
</center>
<!--Load-->
<center>
<br />
<br />
<div class="loading-overlay" id="loadingOverlay">
    <div class="loading-spinner"></div>
  </div>
  

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        loadingOverlay.classList.add('loading');
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
          });

          setTimeout(() => {
            loadingOverlay.classList.remove('loading');
          }, 600);
        }
      });
    });

    window.addEventListener('load', () => {
      loadingOverlay.classList.add('loading');
      setTimeout(() => {
        loadingOverlay.classList.remove('loading');
      }, 2000);
    });</script>
    <div class="bento-grid" bg="grayscale30" cg="grayscale1" id="l" style="border-radius:10px;width:90%;overflow-y:hidden;overflow-x:auto">
    <center><h1 cg="pink30">Loader:</h1></center>
    <p style="margin-top:35px">At the start of the code again!</p>
    </div>
<!--Navbar-->
<br />
<br />
<div class="bento-grid" bg="grayscale30" style="border-radius:10px;width:90%;overflow-y:hidden;overflow-x:auto" id="n">
 <h1 cg="pink30">Navbar:</h1>
    <nav style="background:rgba(110, 0, 209, 0.17);box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0);backdrop-filter:blur(12.1px);border:.5px solid rgba(255, 255, 255, 0.2);" cg="grayscale1"><p style="margin-top:35px">Looks better at the start of the code...</p></nav>
    </div>
    <br />
    <br />
<!--Bento-->
<div class="bento-grid" bg="grayscale30" style="border-radius:10px; width:90%;overflow-y:hidden;overflow-x:auto" id="b">
    <h1 cg="pink30">Bento:</h1>
    <br />
    <div class="bento-cell" bg="grayscale1">
            <div class="content">
                <h2 font="serif" grad="fire-and-ice">Bento Cell 1</h2>
                <u><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></u>
            </div>
        </div>
        <div class="bento-cell" bg="grayscale1">
            <div class="content">
                <h2 font="palatino" grad="ocean-wave">Bento Cell 2</h2>
                <u><p>Nulla facilisi. Phasellus bibendum magna vel magna dapibus, ut tincidunt arcu dictum.</p></u>
            </div>
        </div>
        <div class="bento-cell" bg="grayscale1">
            <div class="content">
                <h2 font="times" grad="cotton-candy">Bento Cell 3</h2>
                <u><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></u>
            </div>
        </div>
        <br />
    </div>
    <br />
    <br />
<!--Slide-->
<div class="bento-grid" bg="grayscale30" style="border-radius:10px; width:90%;" id="s">
    <h1 cg="pink30">Slides:</h1>
    <br />
    <div class="slider-container">
        <input type="radio" name="slide" id="slide1" checked>
        <input type="radio" name="slide" id="slide2">
        <input type="radio" name="slide" id="slide3">
        <input type="radio" name="slide" id="slide4">
        <div class="slides">
            <div class="slide" grad="sapphire-skies">
                <h2 grad="sapphire-skies">Slide 1</h2>
                <p grad="sapphire-skies">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="slide" grad="rose-blush">
                <h2 grad="rose-blush">Slide 2</h2>
                <p grad="rose-blush">Nulla facilisi. Phasellus bibendum magna vel magna dapibus.</p>
            </div>
            <div class="slide" grad="leafy-greens">
                <h2 grad="leafy-greens">Slide 3</h2>
                <p grad="leafy-greens">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </div>
            <div class="slide" grad="twilight-forest">
                <h2 grad="twilight-forest">Slide 4</h2>
                <p grad="twilight-forest">Suspendisse potenti. Ut malesuada sapien vel justo fermentum ultrices.</p>
            </div>
        </div>
        <div class="slider-nav">
            <label for="slide1"></label>
            <label for="slide2"></label>
            <label for="slide3"></label>
            <label for="slide4"></label>
        </div>
    </div>
    </div>
    <br />
    <br />
<!--Button-->
<div class="bento-grid" bg="grayscale30" style="border-radius:10px; width:90%;" id="u">
    <h1 cg="pink30">Buttons:</h1>
    <div class="bento-grid" bg="black" style="border-radius:10px;">
    <button grad="sunset-blaze">Click Me</button> 
<button>Click Me</button> 
<button grad="dreamy-night">Click Me</button>
    </div>
</div>
    <br />
    <br />
<!--Dropdown-->
</center>
<div class="bento-grid" bg="grayscale30" style="border-radius:10px; width:90%;" id="d">
    <center><h1 cg="pink30">Dropdowns:</h1></center>
  <div class="dropdown"> 
  <button class="dropbtn" style="margin-top:25px" bg="red5">Dropdown</button>
   <button class="dropbtn" style="margin-top:25px" bg="red5">Dropdown</button>
  <div id="tdr">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    </div>
    </div>
    </div>
    <br />
    <br />
<!--Colors-->
<center>
  <div class="bento-grid" bg="grayscale30" style="border-radius:10px; width:90%;">
    <center><h1 cg="pink30" id="c">Colors:</h1><h2 cg="pink30">(bg=""/cg="")</h2></center>
    <!--Red-->
      <div class="bento-cell" cg="grayscale1" style="border-radius:5px;"><div bg="grayscale1" style="overflow-y: auto; overflow-x: hidden;"><h1 cg="grayscale30"><center>[Red]</center></h1><div bg="red1" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red1</center><br /><br /><br /><br /></h2></div></div><br /><br /><div bg="red2" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red2</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="red3" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red3</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="red4" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red4</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="red5" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red5</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="red6" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red6</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="red7" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red7</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="red8" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red8</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="red9" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red9</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="red10" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red10</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="red11" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red11</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="red12" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red12</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="red13" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red13</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="red14" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red14</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="red15" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>red15</center><br /><br /><br /><br /></h2></div><br /><br /><center><p>Up to 30!</p></center></div>
    <!--Blue-->
    <div class="bento-cell" cg="grayscale1" style="border-radius:5px;"><div bg="grayscale1" style="overflow-y: auto; overflow-x: hidden;"><h1 cg="grayscale30"><center>[Blue]</center></h1><div bg="blue1" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue1</center><br /><br /><br /><br /></h2></div></div><br /><br /><div bg="blue2" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue2</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="blue3" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue3</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="blue4" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue4</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="blue5" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue5</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="blue6" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue6</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="blue7" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue7</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="blue8" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue8</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="blue9" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue9</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="blue10" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue10</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="blue11" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue11</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="blue12" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue12</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="blue13" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue13</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="blue14" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue14</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="blue15" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>blue15</center><br /><br /><br /><br /></h2></div><br /><br /><center><p>Up to 30!</p></center></div>
    <!--Green-->
    <div class="bento-cell" cg="grayscale1" style="border-radius:5px;"><div bg="grayscale1" style="overflow-y: auto; overflow-x: hidden;"><h1 cg="grayscale30"><center>[Green]</center></h1><div bg="green1" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green1</center><br /><br /><br /><br /></h2></div></div><br /><br /><div bg="green2" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green2</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="green3" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green3</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="green4" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green4</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="green5" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green5</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="green6" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green6</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="green7" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green7</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="green8" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green8</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="green9" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green9</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="green10" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green10</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="green11" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green11</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="green12" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green12</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="green13" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green13</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="green14" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green14</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="green15" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>green15</center><br /><br /><br /><br /></h2></div><br /><br /><center><p>Up to 30!</p></center></div>
    <!--Orange-->
    <div class="bento-cell" cg="grayscale1" style="border-radius:5px;"><div bg="grayscale1" style="overflow-y: auto; overflow-x: hidden;"><h1 cg="grayscale30"><center>[Orange]</center></h1><div bg="orange1" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange1</center><br /><br /><br /><br /></h2></div></div><br /><br /><div bg="orange2" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange2</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="orange3" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange3</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="orange4" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange4</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="orange5" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange5</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="orange6" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange6</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="orange7" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange7</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="orange8" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange8</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="orange9" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange9</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="orange10" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange10</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="orange11" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange11</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="orange12" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange12</center><br /><br /><br /><br /></h2></div><br 7/><br /><div bg="orange13" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange13</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="orange14" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange14</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="orange15" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>orange15</center><br /><br /><br /><br /></h2></div><br /><br /><center><p>Up to 18!</p></center></div>
    <!--Purple-->
    <div class="bento-cell" cg="grayscale1" style="border-radius:5px;"><div bg="grayscale1" style="overflow-y: auto; overflow-x: hidden;"><h1 cg="grayscale30"><center>[Purple]</center></h1><div bg="purple1" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>purple1</center><br /><br /><br /><br /></h2></div></div><br /><br /><div bg="purple2" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>purple2</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="purple3" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>purple3</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="purple4" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>purple4</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="purple5" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>purple5</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="purple6" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>purple6</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="purple7" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>purple7</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="purple8" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>purple8</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="purple9" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>purple9</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="purple10" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>purple10</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="purple11" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>purple11</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="purple12" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>purple12</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="purple13" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>purple13</center><br /><br /><br /><br /></h2></div><br /><br /><div bg="purple14" style="border-radius:3px;"><h2 style="margin-top:-10px;"><center>purple14</center><br /><br /><br /><br
