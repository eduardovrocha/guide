class CreateAssetCommodities < ActiveRecord::Migration[7.0]
  def change
    create_table :asset_commodities do |t|
      t.string :index_cod, null: false
      t.string :last_range, array: true, default: []
      t.timestamps
    end
  end
end
