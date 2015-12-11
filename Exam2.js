function GetAllCategories()
{
    var objRequest = new XMLHttpRequest();  //Create AJAX request object

    //Create URL and Query string
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCategories";
    //url += document.getElementById("custid").value;


    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput1(output);

        }
    }

    //Initiate the server request
    objRequest.open("GET", url, true);
    objRequest.send();

}

function GenerateOutput1(result)
{
    var count = 0;
    var displaytext = "";


    //Loop to extract data from the response object
    for (count = 0; count < result.GetAllCategoriesResult.length; count++)
    {

        displaytext += result.GetAllCategoriesResult[count].CID + ", " +
result.GetAllCategoriesResult[count].CName + ", "+
result.GetAllCategoriesResult[count].CDescription + "<br>";

    document.getElementById("categories").innerHTML = displaytext;

    }

}

function CreateCategory() {
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCategory";

    //Collect Customer data from web page
    var categoryname = document.getElementById("catname").value;
    var categorydesc = document.getElementById("catdesc").value;

    //Create the parameter string
    var newcategory = '{"CName":"' + categoryname + '","CDescription":"' + categorydesc + '" }';

    //Checking for AJAX operation return
    objRequest.onreadystatechange = function() {
        if (objRequest.readyState == 4 && objRequest.status == 200) {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
        }
    }
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcategory);
}

function OperationResult(output1)
{
    if (output1.WasSuccessful == 1)
    {
        document.getElementById("create").innerHTML = "The operation was successful!"
    }
    else
    {
        document.getElementById("create").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}

function DeleteCategory()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCategory/";
    url += document.getElementById("delcatid").value;

    //Checking for AJAX operation return
    objRequest.onreadystatechange = function() {
        if (objRequest.readyState == 4 && objRequest.status == 200) {
            var result2 = JSON.parse(objRequest.responseText);
            OperationResultDel(result2);
        }
    }
    //Start AJAX request
    objRequest.open("GET", url, true);
    //objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send();
}

function OperationResultDel(result)
{
    if (result.DeleteCategoryResult.WasSuccessful == 1) {
        document.getElementById("resultdel").innerHTML = "The operation was successful!"
    }
    else
    {
        document.getElementById("resultdel").innerHTML = "The operation was not successful!" + "<br>" + result.DeleteCustomerResult.Exception;
    }
    
}

function UpdateCatDesc() {
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateCatDescription";

    //Collect Customer data from web page
    var categoryid = document.getElementById("categoryid").value;
    var categorydesc = document.getElementById("categorydesc").value;
            

    //Create the parameter string
    var upcategory = '{"CID":"' + categoryid +  '","CDescription":"' + categorydesc + '"}';
    
    //Checking for AJAX operation return
    objRequest.onreadystatechange = function() {
        if (objRequest.readyState == 4 && objRequest.status == 200) {
            var results = JSON.parse(objRequest.responseText);
            OperationResultUp(results);
        }
    }
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(upcategory);
}

function OperationResultUp(updatestatus)
{
    if (updatestatus.WasSuccessful == 1)
    {
        document.getElementById("resultupdate").innerHTML = "The operation was successful";
    }
    else if (updatestatus.WasSuccessful == 0)
    {
        document.getElementById("resultupdate").innerHTML = "The operation was not successful!" + "<br>" + updatestatus.Exception;
    }
    else if (updatestatus.WasSuccessful == -2)
    {
      document.getElementById("resultupdate").innerHTML = "Operation failed because the data string supplied could not be deserialized into the service object"
    }
    else if (updatestatus.WasSuccessful == -3)
    {
        document.getElementById("resultupdate").innerHTML = "Operation failed because a record with the supplied Category ID could not be found"
    }
    //else
    //{
    //    document.getElementById("resultupdate").innerHTML = "Please enter a category ID and Description ";
    //}
}

function ShowMe()
{
   if (selectsec.value == "0")
    {
        document.getElementById("createsec").style.visibility = 'hidden';
        document.getElementById("createsec").style.display = 'none';
        document.getElementById("deletesec").style.visibility = 'hidden';
        document.getElementById("deletesec").style.display = 'none';
        document.getElementById("updatesec").style.visibility = 'hidden';
        document.getElementById("updatesec").style.display = 'none';
        document.getElementById("getsec").style.visibility = 'hidden';
        document.getElementById("getsec").style.display = 'none';
        document.getElementById("aboutsec").style.visibility = 'hidden';
        document.getElementById("aboutsec").style.display = 'none';
    }
    
    if (selectsec.value == "1")
    {
        document.getElementById("createsec").style.visibility = 'visible';
        document.getElementById("createsec").style.display = '';
        document.getElementById("deletesec").style.visibility = 'hidden';
        document.getElementById("deletesec").style.display = 'none';
        document.getElementById("updatesec").style.visibility = 'hidden';
        document.getElementById("updatesec").style.display = 'none';
        document.getElementById("getsec").style.visibility = 'hidden';
        document.getElementById("getsec").style.display = 'none';
        document.getElementById("aboutsec").style.visibility = 'hidden';
        document.getElementById("aboutsec").style.display = 'none';
    }
    else
    {
        document.getElementById("createsec").style.visibility = 'hidden';
        document.getElementById("createsec").style.display = '';
        
    }
    
    
    if (selectsec.value == "2")
    {
        document.getElementById("deletesec").style.visibility = 'visible';
        document.getElementById("deletesec").style.display = '';
        document.getElementById("updatesec").style.visibility = 'hidden';
        document.getElementById("updatesec").style.display = 'none';
        document.getElementById("createsec").style.visibility = 'hidden';
        document.getElementById("createsec").style.display = 'none';
        document.getElementById("getsec").style.visibility = 'hidden';
        document.getElementById("getsec").style.display = 'none';
        document.getElementById("aboutsec").style.visibility = 'hidden';
        document.getElementById("aboutsec").style.display = 'none';
    }
    else
    {
        document.getElementById("deletesec").style.visibility = 'hidden';
        document.getElementById("deletesec").style.display = 'none';
        
    }
    
    if (selectsec.value == "3")
    {
        document.getElementById("updatesec").style.visibility = 'visible';
        document.getElementById("updatesec").style.display = '';
        document.getElementById("createsec").style.visibility = 'hidden';
        document.getElementById("createsec").style.display = 'none';
        document.getElementById("deletesec").style.visibility = 'hidden';
        document.getElementById("deletesec").style.display = 'none';
        document.getElementById("getsec").style.visibility = 'hidden';
        document.getElementById("getsec").style.display = 'none';
        document.getElementById("aboutsec").style.visibility = 'hidden';
        document.getElementById("aboutsec").style.display = 'none';
    }
    else
    {
        document.getElementById("updatesec").style.visibility = 'hidden';
        document.getElementById("updatesec").style.display = 'none';
    }
    
    if (selectsec.value == "4")
    {
        document.getElementById("getsec").style.visibility = 'visible';
        document.getElementById("getsec").style.display = '';
        document.getElementById("createsec").style.visibility = 'hidden';
        document.getElementById("createsec").style.display = 'none';
        document.getElementById("deletesec").style.visibility = 'hidden';
        document.getElementById("deletesec").style.display = 'none';
        document.getElementById("updatesec").style.visibility = 'hidden';
        document.getElementById("updatesec").style.display = 'none';
        document.getElementById("aboutsec").style.visibility = 'hidden';
        document.getElementById("aboutsec").style.display = 'none';
    }
    else
    {
        document.getElementById("getsec").style.visibility = 'hidden';
        document.getElementById("getsec").style.display = 'none';
    }
    
    if (selectsec.value == "5")
    {
        document.getElementById("aboutsec").style.visibility = 'visible';
        document.getElementById("aboutsec").style.display = '';
        document.getElementById("getsec").style.visibility = 'hidden';
        document.getElementById("getsec").style.display = 'none';
        document.getElementById("createsec").style.visibility = 'hidden';
        document.getElementById("createsec").style.display = 'none';
        document.getElementById("deletesec").style.visibility = 'hidden';
        document.getElementById("deletesec").style.display = 'none';
        document.getElementById("updatesec").style.visibility = 'hidden';
        document.getElementById("updatesec").style.display = 'none';
    }
    else
    {
        document.getElementById("aboutsec").style.visibility = 'hidden';
        document.getElementById("aboutsec").style.display = '';
    }
}