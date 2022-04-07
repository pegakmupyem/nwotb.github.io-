protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
 
    response.setContentType("text/html;charset=UTF-8");
    request.setCharacterEncoding("UTF-8");
    // Получаем входной поток HTTP-запроса
    InputStream is = request.getInputStream();
    // Создаем объект BufferedReader с входным потоком HTTP-запроса
    BufferedReader br = new BufferedReader(new InputStreamReader(is,"UTF-8"));
    StringBuilder sb = new StringBuilder();
 
    // Чтение содержимого HTTP-запроса
    String buffer = null;
    while ((buffer = br.readLine()) != null) {
         sb.append(buffer);
    }
&nbsp;&nbsp;&nbsp; String content = sb.toString().substring(sb.toString().indexOf("<?xml"), sb.toString().indexOf("</plist>")+8);
    // содержимое - это полученная строка xml
    // Просто выполняем парсинг xml
    String udid =
    response.setStatus(301); // После 301 устройство iOS автоматически откроет браузер сафари
    response.setHeader("Location", "http://192.168.1.106:8080/udid.jsp?UDID="+udid);
    //http://192.168.1.106:8080/udid.jsp - это страница, используемая для отображения udid, вы также можете использовать предыдущую страницу загрузки файла мобильного профиля
 
}
