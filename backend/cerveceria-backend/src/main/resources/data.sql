-- ============================================================
--  CERVECERÍAS (3)
-- ============================================================
INSERT INTO brewery (id, nombre, pais, descripcion) VALUES
(1, 'La Cibeles', 'España',   'Cervecería artesana madrileña fundada en 2010, conocida por sus lagers y ales de alta calidad.'),
(2, 'Estrella Damm', 'España', 'Icónica cervecería barcelonesa desde 1876, referente del Mediterráneo.'),
(3, 'BrewDog', 'Escocia',     'Pionera de la revolución craft en Europa, famosa por sus IPAs extremas.');

-- ============================================================
--  CERVEZAS (7)
-- ============================================================
INSERT INTO beer (id, nombre, estilo, graduacion_alcoholemica, descripcion, brewery_id) VALUES
(1, 'Cibeles Rubia',    'Lager',      5.2, 'Lager suave y refrescante con notas de cereales y lúpulo floral.',   1),
(2, 'Cibeles Negra',    'Stout',      6.8, 'Stout oscura con aromas de café, chocolate negro y malta tostada.',   1),
(3, 'Cibeles IPA',      'IPA',        6.5, 'India Pale Ale con un intenso amargor y notas tropicales de mango.',  1),
(4, 'Estrella Damm',    'Lager',      5.4, 'La clásica lager mediterránea, ligera y muy refrescante.',            2),
(5, 'Voll-Damm',        'Märzen',     7.2, 'Doble malta de estilo alemán, cuerpo robusto y final dulce.',         2),
(6, 'Punk IPA',         'IPA',        5.6, 'La IPA que inició la revolución craft. Tropical, refrescante y sin complejos.', 3),
(7, 'Hazy Jane',        'New England IPA', 5.0, 'NEIPA turbia con abundante lúpulo en frío, notas de fruta tropical y mínimo amargor.', 3);
