class Pet < ApplicationRecord
    validates :name, :breed, :age, :sex, :size, :about, presence: true

    belongs_to :owner,
        foreign_key: :adopted_by,
        class_name: :User,
        optional: true

    has_many_attached :photos
end
