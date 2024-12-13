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
String apellido=request.getParameter("apellido");
String edad=request.getParameter("edad");
String contra=request.getParameter("contra");
%>
<%
String insertarsql="Insert INTO usuarios(nombre,apellido,edad,contra) VALUES('"+nombre+"','"+apellido+"','"+edad+"','"+contra+"')";
dbstatement.executeUpdate(insertarsql);
response.sendRedirect("log.html");
%>
</body>
</html>