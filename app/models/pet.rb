class Pet < ApplicationRecord
    validates :name, :breed, :age, :sex, :size, :about, presence: true
end
