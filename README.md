Bismillahirrahmanirrahim 


Elhamdülillahirabbülalemin 


Es-selatu vesselamu alâ Rasulîna Muhammedin ve alâ alihi ve sahbihi ecmain.

# Musterisi Burada

Next.js, Vercel, Neon, Prisma, UploadThing, Stream.io ve Expo ile geliştirilmiş iş bulma platformu.

## Kurulum

### Gereksinimler

- Node.js (>= 18)
- npm veya yarn
- PostgreSQL (Neon ile ücretsiz bulut veritabanı önerilir)
- [Vercel](https://vercel.com/) hesabı (deploy için)
- [Stream.io](https://getstream.io/) hesabı (chat için)
- [UploadThing](https://uploadthing.com/) hesabı (dosya yükleme için)
- [Expo](https://expo.dev/) (mobil uygulama için)
- .env dosyası (örnek için `.env.example`)

### Adımlar

1. Depoyu klonlayın:
   ```sh
   git clone https://github.com/kullaniciadi/musterisi_burada.git
   cd musterisi_burada
   ```

2. Bağımlılıkları yükleyin:
   ```sh
   npm install --legacy-peer-deps
   
   ```

3. Ortam değişkenlerini ayarlayın:
   - `.env` dosyasını oluşturun ve Neon, Stream.io, UploadThing anahtarlarınızı girin.

4. Veritabanını migrate edin:
   ```sh
   npx prisma migrate deploy
   ```

5. Geliştirme sunucusunu başlatın:
   ```sh
   npm run dev
   # veya
   yarn dev
   ```

### Mobil Uygulama (Expo)

```sh
cd mobile
npm install
npx expo start
```

### Deploy

- Vercel üzerinden kolayca deploy edebilirsiniz. Ortam değişkenlerini Vercel panelinden girmeniz yeterli.

## Katkı Sağlama

Katkıda bulunmak için lütfen bir pull request gönderin.

## Lisans
### Yekazad Software Center tarafından yapılmıştır

## İletişim

Daha fazla bilgi için [iletişim sayfamızı](mailto:info@yekazad.com) ziyaret edin.
