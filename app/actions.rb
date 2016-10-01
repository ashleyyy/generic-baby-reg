# Homepage (Root path)
get '/' do
  @items = Item.all
  erb :index
end

get '/admin' do
  @items = Item.all
  erb :admin
end

get '/items' do
  @items = Item.all.order(:title)
  @items.to_json
end

post '/items' do
  @item = Item.new(
    title: params[:title],
    purchased: params[:purchased],
    comments: params[:comments],
    url: params[:url]
  )
  if @item.save
    @item.to_json
  end
end

put '/items/:id' do
  @item = Item.find_by(id: params[:id])
  
  @item.title = params[:title],
  @item.purchased = params[:purchased]
  @item.comments params[:comments]
  @item.url = params[:url]

    if @item.save
      @item.to_json
    end
end

get '/items/:id' do
  @item = Item.find_by(id: params[:id])
  @item.to_json
end