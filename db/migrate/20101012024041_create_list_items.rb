class CreateListItems < ActiveRecord::Migration
  def self.up
    create_table :list_items do |t|
      t.string :list_item_name
      t.string :list_item_brand
      t.string :list_item_size
      t.integer :list_id

      t.timestamps
    end
  end

  def self.down
    drop_table :list_items
  end
end
