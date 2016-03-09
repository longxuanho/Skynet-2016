Nhoms = new Mongo.Collection("nhoms");
ChungLoais = new Mongo.Collection("chungloais");
Loais = new Mongo.Collection("loais");
Parties = new Mongo.Collection("parties");
DonVis = new Mongo.Collection("donvis");
DiaBans = new Mongo.Collection("diabans");
QuocGias = new Mongo.Collection("quocgias");
HangSanXuats = new Mongo.Collection("hangsanxuats");
ModelThietBis = new Mongo.Collection("modelthietbis");
LoaiThongSoKyThuats = new Mongo.Collection("loaithongsokythuats");
ThongSoKyThuats = new Mongo.Collection("thongsokythuats");
ThietBis = new Mongo.Collection("thietbis");
UserSettings = new Mongo.Collection("usersettings");
LichSuaChuas = new Mongo.Collection("lichsuachuas");
HoSoLuuTrus = new Mongo.Collection("hosoluutrus");
NhanSus = new Mongo.Collection("nhansus");
CauHois = new Mongo.Collection("cauhois");
SuaChuas = new Mongo.Collection("suachuas");
SuaChuaLogs = new Mongo.Collection("suachualogs");

Images = new FS.Collection("images", {
    stores: [
        new FS.Store.GridFS("original")
    ],
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});

// EVENT EMITTER THROUGH DDP

ddpEvents = new EventDDP('raix:push', Meteor.connection);


