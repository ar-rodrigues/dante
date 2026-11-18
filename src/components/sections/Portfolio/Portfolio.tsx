'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { FadeUp, PageContainer } from '@/components/layout';
import { portfolioProjects } from '@/data/portfolio';
import { portfolioSection } from '@/data/siteContent';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

import styles from './Portfolio.module.css';

export function Portfolio() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const coverRef = useRef<HTMLVideoElement>(null);
  const dialogVideoRef = useRef<HTMLVideoElement>(null);
  const [coverPaused, setCoverPaused] = useState(false);
  const [coverVisible, setCoverVisible] = useState(false);
  const reduced = usePrefersReducedMotion();
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const project = openIndex === null ? null : portfolioProjects[openIndex];
  const photo = project ? project.images[photoIndex] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openIndex === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [openIndex]);

  useEffect(() => {
    const cover = coverRef.current;
    if (!cover) return;
    const shouldPlay = coverVisible && !document.hidden && !coverPaused && !reduced;
    if (shouldPlay) {
      cover.play().catch(() => undefined);
    } else {
      cover.pause();
    }
  }, [coverVisible, coverPaused, reduced]);

  useEffect(() => {
    const cover = coverRef.current;
    if (!cover || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => setCoverVisible(entries[0]?.isIntersecting ?? false),
      { threshold: 0.15 },
    );
    observer.observe(cover);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!project || !photo || !dialogVideoRef.current) return;
    const video = dialogVideoRef.current;
    if (photo.type === 'video') {
      video.src = photo.src;
      if (photo.poster) video.poster = photo.poster;
      if (!reduced) video.play().catch(() => undefined);
    } else {
      video.pause();
      video.removeAttribute('src');
      video.load();
    }
  }, [project, photo, reduced]);

  const openProject = (index: number) => {
    setOpenIndex(index);
    setPhotoIndex(0);
  };

  const closeDialog = () => {
    dialogVideoRef.current?.pause();
    setOpenIndex(null);
  };

  const showPhoto = (index: number) => {
    if (!project) return;
    const next = (index + project.images.length) % project.images.length;
    setPhotoIndex(next);
  };

  const showProject = (index: number) => {
    const next = (index + portfolioProjects.length) % portfolioProjects.length;
    setOpenIndex(next);
    setPhotoIndex(0);
  };

  return (
    <section id="trabajo" className={styles.section} aria-labelledby="portfolio-title-section">
      <PageContainer>
        <FadeUp>
          <h2 id="portfolio-title-section">
            {portfolioSection.titleBefore}
            <br />
            <em>{portfolioSection.titleEmphasis}</em>
          </h2>
          <p className={styles.lead}>{portfolioSection.description}</p>
        </FadeUp>

        <div className={styles.grid}>
          {portfolioProjects.map((item, index) => (
            <FadeUp
              key={item.name}
              className={styles.projectWrap}
              delay={Math.min(index, 4) * 100}
            >
              <div className={styles.project}>
                <button
                  type="button"
                  className={styles.card}
                  onClick={() => openProject(index)}
                  aria-haspopup="dialog"
                  aria-controls="portfolio-dialog"
                  aria-label={`Abrir proyecto ${item.name}`}
                >
                  {index === 0 && item.cover.type === 'video' ? (
                    <video
                      ref={coverRef}
                      className={styles.coverVideo}
                      src={item.cover.src}
                      poster={item.cover.poster}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={item.cover.alt}
                    />
                  ) : (
                    <Image
                      src={item.cover.src}
                      alt={item.cover.alt}
                      width={1200}
                      height={640}
                      className={styles.coverImage}
                      sizes="(max-width: 650px) 100vw, 25vw"
                    />
                  )}
                  <span className={styles.cardBody}>
                    <span>
                      <strong>{item.name}</strong>
                      <small>{item.services}</small>
                    </span>
                    <em aria-hidden>↗</em>
                  </span>
                </button>

                {index === 0 && item.cover.type === 'video' ? (
                  <button
                    type="button"
                    className={styles.coverToggle}
                    aria-pressed={!coverPaused && !reduced}
                    onClick={() => setCoverPaused((value) => !value)}
                  >
                    {coverPaused || reduced ? 'Reproducir video ▷' : 'Pausar video Ⅱ'}
                  </button>
                ) : null}
              </div>
            </FadeUp>
          ))}
        </div>
      </PageContainer>

      <dialog
        id="portfolio-dialog"
        ref={dialogRef}
        className={styles.dialog}
        onClose={closeDialog}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            showPhoto(photoIndex + 1);
          }
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            showPhoto(photoIndex - 1);
          }
        }}
      >
        {project && photo ? (
          <div className={styles.panel}>
            <button type="button" className={styles.close} onClick={closeDialog} aria-label="Cerrar proyecto">
              ×
            </button>

            <div
              className={styles.media}
              onTouchStart={(event) => {
                if (event.touches.length === 1) {
                  touchStart.current = {
                    x: event.touches[0].clientX,
                    y: event.touches[0].clientY,
                  };
                } else {
                  touchStart.current = null;
                }
              }}
              onTouchEnd={(event) => {
                if (!touchStart.current) return;
                const touch = event.changedTouches[0];
                const dx = touch.clientX - touchStart.current.x;
                const dy = touch.clientY - touchStart.current.y;
                touchStart.current = null;
                if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) {
                  showPhoto(photoIndex + (dx < 0 ? 1 : -1));
                }
              }}
            >
              {photo.type === 'video' ? (
                <video
                  ref={dialogVideoRef}
                  className={styles.dialogVideo}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={photo.alt}
                />
              ) : (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1200}
                  height={640}
                  className={styles.dialogImage}
                  sizes="(max-width: 650px) 100vw, 760px"
                />
              )}
            </div>

            <div className={styles.photoDots} role="group" aria-label="Imágenes del proyecto">
              {project.images.map((media, i) => (
                <button
                  key={media.src}
                  type="button"
                  aria-label={`Ver imagen ${i + 1}: ${media.alt}`}
                  aria-pressed={i === photoIndex}
                  onClick={() => showPhoto(i)}
                >
                  <span />
                </button>
              ))}
            </div>

            <p className={styles.srOnly} aria-live="polite">
              Imagen {photoIndex + 1} de {project.images.length}
            </p>

            <p className={styles.services}>{project.services}</p>
            <h3 id="portfolio-title">{project.name}</h3>
            <p className={styles.description}>{project.description}</p>

            <nav className={styles.brandNav} aria-label="Navegar entre marcas">
              <button type="button" onClick={() => showProject((openIndex ?? 0) - 1)}>
                ← Marca anterior
              </button>
              <span aria-live="polite">
                Marca {(openIndex ?? 0) + 1} de {portfolioProjects.length}
              </span>
              <button type="button" onClick={() => showProject((openIndex ?? 0) + 1)}>
                Siguiente marca →
              </button>
            </nav>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
