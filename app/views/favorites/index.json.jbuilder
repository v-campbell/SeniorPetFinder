@favorites.each do |favorite|
    json.set! favorite.id do
        json.extract! favorite, :id, :pet_id
    end
end