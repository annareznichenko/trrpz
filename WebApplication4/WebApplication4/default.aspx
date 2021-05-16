<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="WebApplication4._default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link id ="style1" rel="stylesheet" type="text/css" href="style/StyleSheet.css"/>
    <script src="Paint.js"></script>
</head>
    <body>
        <form id="form1" runat="server">
            <img alt="" class="auto-style1" src="clock.jpg" />
            <p>
                <asp:Label id="Time" runat="server" Text="Bремя: "/>
            </p>
            <p>
                <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Refresh" />
            </p>
        </form>
        <form>

            <input id="Button2" type="button" value="Paint" onclick="onClickButton2()"/>
            <div id="viewContainer" >
                <canvas id="canv" style="padding: 0px; margin: 0px; position:relative; top: 0px; left: 0px; height: 90px; width: 632px;" ></canvas>
            </div>
        </form>
        <form>

            <input id="Button3" type="button" value="Paint" onclick="onClickAJAX()"/>
            <div id="viewContainer1" >
                <canvas id="canv1" style="padding: 0px; margin: 0px; position:relative; top: 0px; left: 0px; height: 90px; width: 632px;" ></canvas>
            </div>
        </form>
    </body>
</html>