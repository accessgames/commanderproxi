self.__uv$config = {
    prefix: '/service/',
    bare: 'https://placeholder.url/bare',
    encodeUrl: Ultraviolet.codec.plain.encode,
    decodeUrl: Ultraviolet.codec.plain.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    index:  'index.js',
    sw: '/uv/uv.sw.js',
};
