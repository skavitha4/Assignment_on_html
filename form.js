const error=document.getElementById("iderror");
const uerror=document.getElementById("uerror");
const gerror=document.getElementById("gerror");
const berror=document.getElementById("berror");
const cerror=document.getElementById("cerror");
const userId=document.getElementById("userid");
const ugender=document.querySelectorAll(".gen");
const ufeed=document.querySelectorAll("#ufeed");
const ubranch=document.querySelectorAll("#ubranch");
const usub=document.querySelectorAll(".usub");
function validate()
{
	
	const pattern=/^[r/R][0-9]{6}$/ ;
	let check = pattern.test(userId.value);
	if(userId.value==""){
		error.innerText="id required";}
	else if(userid.value.length!=7){
		error.innerText="Length should be 7";}
	else if(check!=true){
		error.innerText="should start with R"}
	const pattern2=/^[a-zA-Z\s]+$/ ;
	let check2=pattern2.test(uname.value);
	if(uname.value==""){
		uerror.innerText="name required";
	}else if(check2!=true){
		uerror.innerText="should contain alphabets only";
	}
	for(var g=0;g<ugender.length;g++)
	{
	if(ugender[g].checked){
		break;
	}
	}
	if(ugender.length==g){
		gerror.innerText="select atleast one option";
	}
	let check3=pattern2.test(ufeed.value);
	if(ufeed.value==""){
		feederror.innerText="give your valuable feedback";
	}
	if(ubranch.value=="choose")
		berror.innerText="choose your branch";

	for(var g=0;g<usub.length;g++)
	{
	if(usub[g].checked){
		break;
	}
	}
	if(usub.length==g){
		cerror.innerText="select atleast one option";
	}	
}
form.addEventListener("submit",event=>
{
	event.preventDefault();
	validate();
});
