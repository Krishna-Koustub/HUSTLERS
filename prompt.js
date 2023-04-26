<html>
   <head>
   <script type="text/javascript">
   function getName()
   {
       var name;
       name = prompt("Your name ?","Type in your name here in this box");
       if ( name )
       {
           alert('Welcome to ' + name);
       }
   }
   </script>
   </head>
   <body onload="getName()" >
   </body>
</html>