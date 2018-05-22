function CreateXMLDoc(xmlFilePath)
{
    if(window.ActiveXObject)
    {
        //获得操作的xml文件的对象
        var msXMLdom = new ActiveXObject('Microsoft.XMLDOM');
        msXMLdom.async = false;
        msXMLdom.load(xmlFilePath);
        return msXMLdom;
    }
    else
    {
        var oXmlHttp = new XMLHttpRequest() ;
        oXmlHttp.open( "GET", xmlFilePath, false ) ;
        oXmlHttp.send(null) ;
        return oXmlHttp.responseXML;

    }
}
var str = "<response-body content-type='application/json'>" +
    "    <headers>" +
    "        <head>" +
    "        </head>" +
    "    </headers>" +
    "    <body>" +
    "        <item key='status' type='Integer' desc=''>200</item>" +
    "        <item key='message' type='String' desc=''>success</item>" +
    "        <item key='data' type='Object' desc=''>" +
    "            <item key='yesterday' type='Object' desc=''>" +
    "                <item key='date' type='String' desc=''>16日星期三</item>" +
    "                <item key='high' type='String' desc=''>高温 28℃ </item>" +
    "                <item key='fx' type='String' desc=''> 南风</item>" +
    "                <item key='low' type='String' desc=''> 低温 21℃</item>" +
    "                <item key='fl' type='String' desc=''> <![CDATA[<3级]]></item>" +
    "                <item key='type' type='String' desc=''> 多云</item>" +
    "            </item>" +
    "            <item key='forcast' type='Array' >" +
    "                <item key='date' type='String' desc='日期'>17日星期四</item>" +
    "                <item key='high' type='String' desc='最高温度'>高温 25℃ </item>" +
    "                <item key='fengxiang' type='String' desc='风向'> 南风</item>" +
    "                <item key='low' type='String' desc='最低温度'> 低温 21℃</item>" +
    "                <item key='fengli' type='String' desc='风力'> <![CDATA[<3级]]></item>" +
    "                <item key='type' type='String' desc='天气状态'> 小雨</item>" +
    "            </item>" +
    "            <item key='city' type='String' desc='城市名称'> 北京</item>" +
    "            <item key='aqi' type='String' desc='api'> 85</item>" +
    "            <item key='wendu' type='String' desc='温度'> 22</item>" +
    "            <item key='ganmao' type='String' desc='是否容易感冒'>相对今天出现了较大幅度降温，较易发生感冒，体质较弱的朋友请注意适当防护</item>" +
    "        </item>" +
    "    </body>" +
    "" +
    "</response-body>" ;
//创建文档对象
var parser=new DOMParser();
var xmlDoc=parser.parseFromString(str,"text/xml");

var rootNode=xmlDoc.lastChild;
function BuilderTree(nodeName,level)
{
//子菜单项，缩进的像素数
    var indent=10;
    var temp="";
    level=level==null ? 0 : level;

    return temp;
}
function show(obj)
{
//当前节点的下一节点
    var nextNode=obj.nextSibling;
//当前节点的头部符号节点，就是菜单项前面+、-号
    var subNode=obj.firstChild.firstChild;
    if(nextNode.nodeType==1)
    {
        with(eval(nextNode))
        {
            if(style.display=="")
            {
                style.display="none";
                subNode.nodeValue="+";
            }else
            {
                style.display="";
                subNode.nodeValue="-";
            }
        }
    }
}
