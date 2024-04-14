---
layout: page
permalink: /faqs/
title: FAQs
description: This page serves as a personal reference for swiftly troubleshooting and resolving frequently encountered issues and problems.
nav: false # change this to make this present or absent on navbar
nav_order: 99
---
<html>
    <style>
      html {
        font-size: 20px;
      }

      table {
        border-collapse: separate;
        border-spacing: 15px 0px;
      }

      td {
        padding: 4px 0px;
      }

      body {
        caret-color: transparent;
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
        height: auto;
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
            
      /* 实现折叠文字功能*/
      
      details {
        font: 20x "Times New Roman","STZhongsong";
         padding: 5px 20px;
         margin-bottom: 10px;
         
        }                        
     
      summary {
      	padding: 5px 0px;
        cursor: pointer;
      	-webkit-user-select: none; 
        -moz-user-select: none; 
        -ms-user-select: none; 
        user-select: none; 
        }
              
               
    </style>

  <body>
  <!--↓This is the code for a list↓*/-->
	<details> 
        <summary>EndNote</summary> 
          <content>
            <details> 
            	<summary>CWYW: Add-in missing in MS Office (Especially Word)</summary> 
                <content>Fundamentally, this issue is probably due to the incompatibility between CWYW and other add-ins or third-party software that calls the functionality of any software in the MS Office suite and EndNote's CWYW add-ins.
                <br>For example, I often encounter this issue when running Wondershare PDF to merge multiple Word documents into a single. pdf file.
                <br>For this issue, I recommended the following steps to fix it.
                <ol type=1>
                <li style="margin:0px 20px">In MS Word 2021/365: "File" → "Options" → The "Add-ins" Tab → Find "COM Add-ins" in the "Manage" drop menu, which should be the default option, by the way, → Click "Go..." → Make sure the box in front of "EndNote Cite While You Write" is ticked → "OK" → Close these windows and restart MS Word to see if the problem is fixed.</li>
                <li style="margin:0px 20px">If the above step did not solve the problem, I suggest that you reconfigure the CWYW add-in. Enter the directory where you installed EndNote (typically this would be X:\Program Files (x86)\EndNote 20 and X is the disk you chose to install EndNote 20), you would see an executable file called Configure EndNote.exe. Run it and you could reconfigure Cite While You Write for Microsoft Office as instructed. After doing so, start MS Word and see if the add-in is back on the ribbon. If not, repeat step 1 and see what happens.</li>
                <li style="margin:0px 20px">If you could see the "EndNote Cite While You Write" in the COM Add-in list and no matter how you try to tick and activate this add-in, it will be unticked when you re-open this list, there are probably issues with administrator permissions. Go to the installation directory for the MS Office suite on your computer (typically this would be C:\Program Files\Microsoft Office\root\Office16), find "WINWORD.exe", right click and choose "Run as Administrator". Now repeat step 1 and see if this fixes the problem.</li>
                </ol>
                In my experience, going through these steps would fix this issue.
                </content>
            </details>             
  </details>
  
    <!--↓This is the code for a list↓*/-->
	<details> 
        <summary>R and RStudio</summary> 
          <content>
            <details> 
            	<summary>Seurat</summary>
                	<details> 
            			<summary>Subset(): layer "data" is not found in the object</summary>
                          <content>For example:<br>
                          	<pre>
                              <code>
> mm_gasE7.25_Sox17Cer1Foxa2Pos <- subset(x = mm_gasE7.25, subset = (Sox17 >= 1 | Cer1 >= 1 | Foxa2 >= 1))
Warning: No layers found matching search pattern provided:
layer "data" is not found in the object
                              </code>
                            </pre>
                          This is caused by differences in the strucutre of objects in different versions of Seurat. in versions prior to V4, there would be a layer called data in Seurat that stored the original counts of genes. However, in V5, this layer was renamed to conts. as a result, some of the functions would mismatch and no results could be found.
                          <br>For this issue, add a new arguement <code>slot="counts"</code> here so that it would search not under date but under counts. For the previous example, this would work:
                          	<pre>
                              <code>
mm_gasE7.25_Sox17Cer1Foxa2Pos <- subset(x = mm_gasE7.25, subset = (Sox17 >= 1 | Cer1 >= 1 | Foxa2 >= 1), slot="counts")
                              </code>
                            </pre>
                          </content>
                    </details>
              </details>             
  </details>
  </body>
</html>
