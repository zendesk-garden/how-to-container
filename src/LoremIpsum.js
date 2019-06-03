import React from 'react';

export default function({ section = 1 }) {
  const section1 = (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel quam
        imperdiet, maximus felis viverra, ullamcorper nibh. In at purus
        convallis libero iaculis ornare. Proin ultricies, ligula egestas
        volutpat faucibus, eros dui elementum lectus, eget placerat odio mi
        auctor ligula. Integer justo ipsum, sollicitudin id nisi in, eleifend
        vehicula magna. Phasellus at velit tincidunt, elementum magna sit amet,
        vulputate metus. Curabitur non consectetur metus, quis porttitor justo.
        Maecenas feugiat dignissim vulputate. In vitae imperdiet libero.
      </p>
      <p>
        Mauris sit amet luctus massa. Proin pulvinar nisi a tempus egestas.
        Morbi eleifend efficitur malesuada. Sed faucibus sed mauris sit amet
        interdum. Curabitur scelerisque magna nunc, a finibus purus ultrices sit
        amet. Curabitur finibus, est et mollis auctor, neque nisi sollicitudin
        nulla, ac elementum orci metus quis mi. Proin ut dignissim ante. Vivamus
        magna erat, pulvinar at pellentesque quis, ultrices sit amet ipsum.
        Proin elementum turpis risus, quis auctor libero ultrices vel. Integer
        scelerisque euismod egestas. Donec fermentum tincidunt odio, a cursus
        sem varius eu. In placerat odio pellentesque libero varius ultrices.
      </p>
    </>
  );

  const section2 = (
    <>
      <p>
        Aenean nec sapien sagittis, accumsan urna ac, fringilla purus. Curabitur
        vitae viverra nisl. Donec ultricies felis a nisl interdum tempus.
        Phasellus tempor ultricies nunc, nec volutpat dolor fringilla et.
        Praesent vitae fermentum neque. Vivamus mattis sit amet libero sit amet
        mollis. Quisque dignissim justo sit amet massa posuere, non lobortis
        ipsum tempor. Quisque commodo ligula ut lacinia facilisis. Proin
        iaculis, sapien in mattis faucibus, felis neque tempus est, nec egestas
        mauris quam eget leo. Morbi malesuada tellus sit amet justo ullamcorper
        laoreet. Praesent ultrices, erat eget fringilla tincidunt, arcu arcu
        ultrices diam, non pretium lacus lorem vitae tortor. Vivamus accumsan
        ullamcorper ante eget malesuada.
      </p>
      <p>
        In finibus auctor tristique. Curabitur convallis enim ac enim lacinia
        finibus. Etiam quis enim quis dui mollis tempus dignissim sed metus.
        Aliquam at convallis turpis. Donec malesuada, sapien in faucibus mattis,
        enim erat sodales urna, sed efficitur urna sem sit amet neque. Aliquam
        pretium, enim non fermentum ultricies, eros nibh posuere enim, non
        varius tellus magna et orci. In imperdiet, nulla sit amet pharetra
        dictum, sem ipsum scelerisque nulla, id ornare nunc ligula nec lorem.
        Sed in orci quis metus egestas dictum vitae sed metus. Morbi
        sollicitudin malesuada bibendum. Etiam massa lacus, interdum et eros
        quis, dapibus iaculis libero. Nunc vehicula cursus fringilla. Ut
        venenatis nibh fermentum sem facilisis, id feugiat risus malesuada.
        Pellentesque dolor libero, accumsan eget libero sed, varius dignissim
        augue. Sed lorem ipsum, feugiat quis ultrices eget, pharetra id erat.
        Vestibulum vestibulum nec risus et pellentesque.
      </p>
    </>
  );

  const section3 = (
    <>
      <p>
        Vivamus id massa tellus. Aliquam ultricies accumsan placerat. Duis neque
        mi, ornare sed lorem nec, porttitor congue dui. Quisque orci urna,
        iaculis mattis bibendum non, commodo in augue. Cras vel purus dolor. In
        hac habitasse platea dictumst. Quisque varius risus a quam tincidunt
        vehicula. Sed posuere dolor imperdiet, elementum dui tristique, dictum
        eros. Morbi dapibus nibh ante, non malesuada purus porttitor quis.
      </p>
      <p>
        Sed eros lectus, tincidunt vitae consectetur in, egestas nec odio.
        Nullam quis ante quis justo pellentesque condimentum vel tincidunt
        augue. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Suspendisse euismod, elit lobortis
        ultrices pharetra, magna lectus semper velit, ac molestie nisi lectus
        quis urna. Duis purus odio, venenatis a convallis non, ultricies viverra
        est. Donec pellentesque, turpis a molestie commodo, lorem sapien
        bibendum sapien, id vestibulum nunc lacus a augue. Sed nec felis ac urna
        condimentum fermentum. Pellentesque vestibulum venenatis nisi, sit amet
        ullamcorper dui sodales quis. Fusce vestibulum lacus nec est fringilla
        porta. Nunc ullamcorper ligula ac ornare lacinia. Suspendisse posuere
        velit in felis sollicitudin lobortis. Vivamus rutrum dui ultricies,
        pulvinar felis non, rutrum tellus. Nulla pulvinar velit at felis
        eleifend suscipit. Nulla gravida dignissim aliquam.
      </p>
    </>
  );

  const sections = [section1, section2, section3, section1, section2];

  return sections[section];
}
