class Pet < ApplicationRecord
    # extend FriendlyId
    # friendly_id :name, use: :slugged

    validates :name, :breed, :age, :sex, :size, :about, presence: true

    belongs_to :owner,
        foreign_key: :adopted_by,
        class_name: :User,
        optional: true

    has_many :favorites
    
    has_many_attached :photos



    def self.fetch(maxId)
        pets = Pet
            .where('id > ?', maxId.to_i + Pet.first.id - 1)
            .order(:id)
            .limit(9)
        pets
    end
end
