# Homepage (Root path)
get '/' do
  @items = Item.all
  puts @items
  erb :index
end