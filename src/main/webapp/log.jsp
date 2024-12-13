<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro CN</title>
    <link rel="stylesheet" href="estilos.css">
    
</head>
<body>
<%@page import="java.sql.*" %>
<%
Class.forName("com.mysql.jdbc.Driver");
Connection dbconect=DriverManager.getConnection("jdbc:mysql://localhost:33065/proyecto_progii","root","");
Statement dbstatement=dbconect.createStatement();
%>
<%
String nombre=request.getParameter("nombre");
String contra=request.getParameter("contra");
%>

<%
String mensa;
try{
	PreparedStatement consultaP=dbconect.prepareStatement("SELECT * FROM usuarios WHERE nombre=?");

	consultaP.setString(1,nombre);
	ResultSet resultado_nombre=consultaP.executeQuery();
	
	if(resultado_nombre.next()){
		PreparedStatement consultaP2=dbconect.prepareStatement("SELECT * FROM usuarios WHERE nombre=? AND contra=?");
		consultaP2.setString(1, nombre);
		consultaP2.setString(2, contra);
		ResultSet resultado_contra = consultaP2.executeQuery();

		if(resultado_contra.next()){
			response.sendRedirect("home.html");
		}
		else{
			response.sendRedirect("log_contrainco.html");
		}
	}
	else{
		response.sendRedirect("log_usuinco.html");
	}
	}
	catch(Exception e)
	{
		response.sendRedirect("log.html");
	}
%>
</body>

</html>