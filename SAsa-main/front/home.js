// Criar uma instância do serviço de geocodificação
var geocoder = new google.maps.Geocoder();

// Função para geocodificar um endereço
function geocodeAddress(address) {
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === 'OK') {
            // Se a geocodificação for bem-sucedida, mover o mapa para o local
            map.setCenter(results[0].geometry.location);

            // Adicionar um marcador no local
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocoding falhou devido a: ' + status);
        }
    });
}

// Exemplo de uso
geocodeAddress('Avenida , Florinopólis, SC');
