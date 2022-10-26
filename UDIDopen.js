var get = function(){
window.location.href = 'https://signipasphp.000webhostapp.com/get_mobileconfig.php';
			setTimeout(function(){
                                alert("A теперь откройте приложение ⚙️НАСТРОЙКИ и установите загруженный профиль Check Device Information (UDID) либо в следующем запросе разрешить нажмите и откроется меню настроек с установкой загруженного профиля Check Device Information (UDID)");
                                window.location.href = '/open.mobileprovision';	
			},2000)
            }
