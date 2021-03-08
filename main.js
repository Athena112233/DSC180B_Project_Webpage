function render_demo(demo){
    //case 1
    if(demo == "case1"){
        document.getElementById("classification").innerHTML = 'Wearing Mask Incorrectly';
        document.getElementById("original_image").src = "data/case1.jpg";
        document.getElementById('gradcam_output').src = "data/case1_gradcam.jpg";
        document.getElementById('ig_output').src = "data/case1_results.jpg";
    }
    else if(demo == "case2"){
        document.getElementById("classification").innerHTML = 'Missing Mask';
        document.getElementById("original_image").src = "data/case2.jpg";
        document.getElementById('gradcam_output').src = "data/case2_gradcam.jpg";
        document.getElementById('ig_output').src = "data/case2_results.jpg";
    }
    else if(demo == "case3"){
        document.getElementById("classification").innerHTML = 'Wearig Mask Correctly';
        document.getElementById("original_image").src = "data/case3.jpg";
        document.getElementById('gradcam_output').src = "data/case3_gradcam.jpg";
        document.getElementById('ig_output').src = "data/case3_results.jpg";
    }

}