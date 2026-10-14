'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Expand, X } from 'lucide-react';
import { photos } from '@/lib/content';
export function PhotoAlbum() {
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const photo = photos[active];
  function move(delta: number) { setActive(value => (value + delta + photos.length) % photos.length); }
  return <><div className="album-grid">{photos.map((item, index) => <button className={`album-photo photo-${index}`} key={item.id} onClick={() => { setActive(index); dialog.current?.showModal(); }} aria-label={`Enlarge photo: ${item.caption}`}><div className="album-image"><Image src={`/images/photo-${item.id}.jpg`} alt={item.alt} fill sizes="(max-width: 600px) 80vw, (max-width: 900px) 45vw, 30vw"/><span className="expand-icon"><Expand size={16}/></span></div><span className="photo-caption"><span>{item.caption}</span><span>0{index + 1}</span></span></button>)}</div><dialog ref={dialog} className="lightbox" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={event => { if (event.key === 'ArrowRight') move(1); if (event.key === 'ArrowLeft') move(-1); }} aria-label="Zoe’s photo album"><div className="lightbox-content"><button className="icon-button close-lightbox" onClick={() => dialog.current?.close()} aria-label="Close photo viewer"><X/></button><div className="lightbox-image"><Image src={`/images/photo-${photo.id}.jpg`} alt={photo.alt} fill sizes="90vw"/></div><div className="lightbox-controls"><button className="icon-button" onClick={() => move(-1)} aria-label="Previous photo"><ArrowLeft/></button><p aria-live="polite">{photo.caption}<small>{active + 1} / {photos.length}</small></p><button className="icon-button" onClick={() => move(1)} aria-label="Next photo"><ArrowRight/></button></div></div></dialog></>;
}
