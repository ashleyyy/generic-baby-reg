# Homepage (Root path)
get '/' do
  @items = Item.all
  erb :index
end

get '/items' do
  @items = Item.all
  @items.to_json
end

post '/items' do
  @item = Item.new(
    title: params[:title],
    purchased: params[:purchased],
    comments: params[:comments]
  )
  if @item.save
    @item.to_json
  end
end

put '/items/:id' do
  @item = Item.find_by(id: params[:id])
  @item.purchased = params[:purchased]
    if @item.save
      @item.to_json
    end
end