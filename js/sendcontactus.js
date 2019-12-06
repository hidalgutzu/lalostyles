// =================================================
// Agradecimiento del código a: ScriptShow Web ©
// =================================================
//<![CDATA[
window.onerror=new Function("return true");
 
function sendMail() {
var link = "hidalgutzu@gmail.com"
+ "?cc=info@dedalomultimedia.com"
+ "&name=" + escape(document.getElementById('name').value)
+ "&location=" + escape(document.getElementById('location').value);
+ "&email=" + escape(document.getElementById('email').value);
+ "&cellphone=" + escape(document.getElementById('cellphone').value);
+ "&msg=" + escape(document.getElementById('msg').value);
 
window.location.href = "mailto:" +link;
}
//]]>