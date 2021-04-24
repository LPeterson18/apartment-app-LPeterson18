class AddImageColumnToApartmentTable < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :image, :string
  end
end
